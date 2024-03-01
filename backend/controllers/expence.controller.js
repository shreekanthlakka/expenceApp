import { validationResult } from "express-validator";
import Expence from "../models/expence.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createExpence = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const { amount, category, description, expanceDate } = req.body;
    const newExpence = await Expence.create({
        amount,
        category,
        description,
        expanceDate,
    });
    if (!newExpence)
        throw new ApiErrors(400, "error while creating the expense");

    res.status(200).json(
        new ApiResponce(200, newExpence, "new expence created successfully")
    );
});

const getAllExpences = asyncHandler(async (req, res) => {
    const allExpences = await Expence.find().populate({
        path: "category",
        model: "Category",
        select: "categoryname",
    });
    if (!allExpences) throw new ApiErrors(404, "No expenses found!");
    res.status(200).json(
        new ApiResponce(200, allExpences, "Successfully fetched all expences!")
    );
});

const getAExpence = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "Bad Request", errors.array()));
    }
    const expence = await Expence.findById(req.params.id);
    if (!expence) throw new ApiErrors(404, "no expence was found with this id");
    res.status(200).json(
        new ApiResponce(200, expence, "Successfully fetched single expence!")
    );
});
const updateExpence = asyncHandler(async (req, res) => {
    const { amount, description, expanceDate } = req.body;
    // if (!amount && !category && !description) {
    //     throw new ApiErrors(
    //         "400",
    //         "please provide at least one field to update"
    //     );
    // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new ApiErrors(400, "bad request", errors.array()));
    }
    const updatedExpence = await Expence.findByIdAndUpdate(
        req.params.id,
        {
            amount,
            description,
            expanceDate,
        },
        { new: true }
    );
    if (!updatedExpence)
        throw new ApiErrors(408, "error while updating expence account");

    res.status(200).json(
        new ApiResponce(200, updatedExpence, "updated sucessfully")
    );
});
const deleteExpence = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({
            success: false,
            errors: errors.array(),
        });
    }
    const deleteExpence = await Expence.findByIdAndDelete(req.params.id);
    if (!deleteExpence)
        throw new ApiErrors(
            404,
            "The expence you are trying to delete does not exist."
        );
    res.status(200).json(
        new ApiResponce(200, deleteExpence, "deleated sucessfully")
    );
});

export {
    createExpence,
    getAllExpences,
    getAExpence,
    updateExpence,
    deleteExpence,
};

/**
 * 
 *  const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
 */
