import { validationResult } from "express-validator";
import Category from "../models/category.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createNewCategory = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const newCategory = await Category.create({
        categoryname: req.body.categoryname,
    });

    if (!newCategory)
        throw new ApiErrors(401, "failed to create a new categiry");

    res.status(200).json(
        new ApiResponce(201, newCategory, "category created sucessfully")
    );
});

const allCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    if (!categories) throw new ApiErrors(404, "No Categories Found!");
    res.status(200).json(new ApiResponce(200, categories, "All Categories"));
});

const getCategory = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const category = await Category.findById(req.params.id);
    if (!category) throw new ApiErrors(404, "no category with this Id");

    res.status(200).json(new ApiResponce(200, category));
});

const updateCategory = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "Bad request", errors.array()));
    }
    const { categoryname } = req.body;

    // if (!categoryname)
    //     throw new ApiErrors(400, "Please provide the field to update");
    // const catExists = await Category.findOne({ categoryname });
    // if (catExists)
    //     throw new ApiErrors(409, "The provided category is already in use");

    const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        { categoryname },
        { new: true }
    );
    if (!updatedCategory)
        throw new ApiErrors(500, "Failed To Update The Category");
    res.status(200).json(
        new ApiResponce(200, updatedCategory, "category updated sucessfully")
    );
});

const deleteCategory = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const delCategory = await Category.findByIdAndDelete(req.params.id);
    if (!delCategory) throw new ApiErrors(404, "No such category found.");

    res.status(200).json(
        new ApiResponce(200, null, "Category has been deleted.")
    );
});

export {
    allCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    createNewCategory,
};
