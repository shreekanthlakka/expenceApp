const categoryValidationSchema = {
    categoryname: {
        in: ["body"],
        exists: {
            errorMessage: "categoryname is required",
        },
        trim: true,
        notEmpty: {
            errorMessage: "categoryname cannot be empty",
        },
        custom: {
            options: async function (val) {
                const catExist = await Category.findOne({ categoryname: val });
                if (catExist) throw new Error("category name already exists");
                return true;
            },
        },
    },
};

export { categoryValidationSchema };
