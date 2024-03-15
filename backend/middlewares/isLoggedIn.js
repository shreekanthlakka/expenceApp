import User from "../models/user.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const isLoggedIn = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        throw new ApiErrors(401, "Not logged in or invalid token");
    }
    const decodeToken = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decodeToken._id);
    if (!user) {
        throw new ApiErrors(404, "user not found");
    }
    req.user = user;
    next();
});

export { isLoggedIn };
