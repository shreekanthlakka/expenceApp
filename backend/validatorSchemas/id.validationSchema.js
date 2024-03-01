import { isValidObjectId } from "mongoose";

const validateId = {
    id: {
        in: ["params"],
        exists: {
            errorMessage: "Id is not  provided.",
        },
        isMongoId: {
            errorMessage: "Invalid ID format.",
        },
        // custom: {
        //     options: function (value, { req }) {
        //         console.log(value, " <--------value");
        //         if (!isValidObjectId(value))
        //             throw new Error("Category id must be valid ObjectID");
        //         return true;
        //     },
        // },
    },
};

export { validateId };
