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
    expanceDate: {
        in: ["body"],
        notEmpty: {
            errorMessage: "date should not be empty",
        },
        exists: {
            errorMessage: "Expense date is required",
        },
        default: { defaultValue: new Date() },
        custom: {
            options: function (value) {
                console.log(" date value ==> ", value);
                if (
                    new Date(value).toISOString().split("T")[0] >=
                    new Date().toISOString().split("T")[0]
                ) {
                    throw new Error(
                        "expance date cannot be greater than today"
                    );
                }
                return true;
            },
        },
    },
    category: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Category Id cannot be Empty",
        },
        exists: {
            errorMessage: "This Category Id  does not exist.",
        },
        isMongoId: {
            errorMessage: "Invalid Category ID",
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
