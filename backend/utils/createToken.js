import User from "../models/user.model.js";

const createToken = async (userId, res) => {
    const user = await User.findById(userId).select(
        "+accessToken +refreshToken +authenticatedAt"
    );
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.accessToken = accessToken;
    user.authenticatedAt = [...user.authenticatedAt, new Date().toISOString()];
    await user.save({ validateBeforeSave: false });
    if (!accessToken) {
        throw new ApiError(401, "Failed to generate access token");
    }
    const options = {
        httpOnly: true,
        // sameSite: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 hour
    };
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            success: true,
            session: {
                accessToken,
                refreshToken,
                expires_at: new Date(Date.now() + options.maxAge),
                expires_in: options.maxAge,
            },
            user,
        });
};

export { createToken };
