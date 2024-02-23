import { isValidObjectId } from "mongoose";

const validateId = {
    id: {
        in: ["params"],
        exists: {
            errorMessage: "Id is not  provided.",
        },
        custom: {
            options: function (value, { req }) {
                if (!isValidObjectId(value))
                    throw new Error("Category id must be valid ObjectID");
                return true;
            },
        },
    },
};

export { validateId };
