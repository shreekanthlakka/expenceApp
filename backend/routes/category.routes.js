import express from "express";
import { checkSchema } from "express-validator";
const router = express.Router();
import {
    createCategory,
    allCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    createNewCategory,
} from "../controllers/category.controller.js";
import { categoryValidationSchema } from "../validatorSchemas/category.validateSchema.js";

router
    .route("/new")
    .post(checkSchema(categoryValidationSchema), createNewCategory);

router.route("/all").get(allCategories);

router
    .route("/:id")
    .get(getCategory)
    .patch(checkSchema(categoryValidationSchema), updateCategory)
    .delete(deleteCategory);

export default router;
