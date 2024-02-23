import { isValidObjectId } from "mongoose";

const expenceValidationSchema = {
    amount: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Amount cannot be empty",
        },
        exists: {
            errorMessage: "amount field should be exists",
        },
        custom: {
            options: function (val) {
                if (val < 1) throw new Error("Amount should not be negative");
                return true;
            },
        },
    },
    exanceDate: {
        in: ["body"],
        notEmpty: {
            errorMessage: "date should not be empty",
        },
        exists: {
            errorMessage: "Expense date is required",
        },
        custom: {
            options: function (val) {
                if (new Date(val) > new Date()) {
                    throw new Error(
                        "expance date cannot be greater than today"
                    );
                }
                return true;
            },
        },
    },
    // category: {
    //     in: ["params"],
    //     custom: {
    //         options: function (value, { req }) {
    //             if (!isValidObjectId(value))
    //                 throw new Error("Category id must be valid ObjectID");
    //             return true;
    //         },
    //     },
    // },
    description: {
        in: ["body"],
        trim: true,
    },
};

export { expenceValidationSchema };
