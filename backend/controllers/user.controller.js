import { validationResult } from "express-validator";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import User from "../models/user.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { createToken } from "../utils/createToken.js";
import { client } from "../index.js";

const login = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiResponce(400, "bad request", errors.array()));
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        throw new ApiErrors(404, "User not found with this email");
    }
    const comparepassword = await user.isValidatePassword(password);
    console.log("comparepassword", comparepassword, user.password, password);
    if (!comparepassword) {
        throw new ApiErrors(401, "Invalid Password");
    }
    if (comparepassword) {
        await createToken(user._id, res);
    }
});

const register = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const { name, email, password, phonenumber } = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        phonenumber,
    });
    if (!newUser) {
        throw new ApiErrors(500, "failed to create new user");
    }
    res.status(201).json(
        new ApiResponce(201, "created successfully login to your account")
    );
});

const sendMessage = asyncHandler(async (req, res) => {
    const { to, message } = req.body;
    const msgObj = {
        from: "+13133296224",
        to: to,
        body: message,
    };
    const sentmsg = await client.messages.create(msgObj);
    if (!sentmsg) {
        throw new ApiErrors(500, "Failed To Send OTP Please Try Again Later!");
    }
    res.status(200).json(
        new ApiResponce(200, sentmsg, "message sent sucessfully")
    );
});

// should already be logged in
const logout = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    user.accessToken = null;
    await user.save({ validateBeforeSave: false });
    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponce(200, {}, "User logged Out"));
});

const getLoggedInUserDetails = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const user = await User.findById({ _id: req.user._id }).select(
        "+refreshToken"
    );
    if (!user) {
        throw new ApiErrors(404, "User not found!");
    }

    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
        isAuthenticated: true,
        refreshToken,
        user,
    });
});

const x = asyncHandler(async (req, res, next) => {});

export { login, register, logout, sendMessage, getLoggedInUserDetails };
