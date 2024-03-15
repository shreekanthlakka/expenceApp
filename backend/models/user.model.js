import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: {
            type: String,
            select: false,
        },
        phonenumber: {
            type: String,
            select: false,
        },
        otp: {
            type: String,
            select: false,
        },
        role: { type: String, default: "user" },
        refreshToken: String,
        accessToken: { type: String, select: false },
        forgotPasswordToken: { type: String },
        forgotPasswordExpiry: { type: Date },
        authenticatedAt: { type: [Date], select: false },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("phonenumber")) {
        return next();
    }
    this.phonenumber = await bcrypt.hash(this.phonenumber, 10);
    next();
});

userSchema.methods.isValidatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.SECRET,
        {
            expiresIn: "1d",
        }
    );
};

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({ email: this.email }, process.env.SECRET, {
        expiresIn: "1d",
    });
};

userSchema.methods.getForgotPasswordToken = async function () {
    const token = crypto.randomBytes(20).toString("hex");
    this.forgotPasswordToken = await crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
    this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;
    return token;
};

const User = mongoose.model("User", userSchema);

export default User;
