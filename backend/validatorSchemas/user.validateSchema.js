import User from "../models/user.model.js";

const userValidationSchema = {
    name: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Name cannot be empty",
        },
        exists: {
            errorMessage: "Name must exist",
        },
    },
    // username: {
    //     in: ["body"],
    //     trim: true,
    //     notEmpty: {
    //         errorMessage: "Username cannot be empty",
    //     },
    //     exists: {
    //         errorMessage: "username must exists",
    //     },
    //     custom: {
    //         options: async function (value) {
    //             const user = await User.find({ username: value });
    //             if (user) {
    //                 throw new Error("User with username already exists");
    //             }
    //             return true;
    //         },
    //     },
    // },
    email: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Email can't be Empty",
        },
        exists: {
            errorMessage: "Email field is required",
        },
        isEmail: {
            errorMessage: "Please provide a valid Email Id",
        },
        custom: {
            options: async function (value) {
                const user = await User.findOne({ email: value });
                if (user) throw new Error("This email has been used.");
                return true;
            },
        },
    },
    password: {
        in: ["body"],
        trim: true,
        notEmpty: true,
        custom: {
            options: function (value) {
                if (value.length < 6)
                    throw new Error(
                        "Password should contain at least 6 characters"
                    );
                else return true;
            },
        },
    },
    phonenumber: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Phone number cannot be empty.",
        },
        exists: {
            errorMessage: "Phone number must exist.",
        },
    },
    role: {
        in: ["body"],
        trim: true,
        notEmpty: true,
        exists: {
            errorMessage: "Role does not exist.",
        },
        custom: {
            options: function (val) {
                if (!["user", "admin"].includes(val))
                    throw new Error("role should be either user or admin");
                else return true;
            },
        },
    },
};

export { userValidationSchema };
