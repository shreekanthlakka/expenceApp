import express from "express";
import { checkSchema } from "express-validator";
const router = express.Router();
import {
    allCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    createNewCategory,
} from "../controllers/category.controller.js";
import { categoryValidationSchema } from "../validatorSchemas/category.validateSchema.js";
import { validateId } from "../validatorSchemas/id.validationSchema.js";

router
    .route("/")
    .get(allCategories)
    .post(checkSchema(categoryValidationSchema), createNewCategory);

router
    .route("/:id")
    .get(checkSchema(validateId), getCategory)
    .patch(
        checkSchema(validateId),
        checkSchema(categoryValidationSchema),
        updateCategory
    )
    .delete(checkSchema(validateId), deleteCategory);

export default router;
