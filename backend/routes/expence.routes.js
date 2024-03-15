import express from "express";
const router = express.Router();
import validator, { checkSchema, body, param } from "express-validator";
import {
    createExpence,
    getAllExpences,
    getAExpence,
    updateExpence,
    deleteExpence,
    deleteExpencesByCategoryId,
} from "../controllers/expence.controller.js";
import { expenceValidationSchema } from "../validatorSchemas/expence.validateSchema.js";
import { validateId } from "../validatorSchemas/id.validationSchema.js";

router
    .route("/")
    .get(getAllExpences)
    .post(checkSchema(expenceValidationSchema), createExpence);
router
    .route("/:id")
    .get(
        // param("id").exists().notEmpty().isMongoId().withMessage("Invalid ID"),
        checkSchema(validateId),
        getAExpence
    )
    .patch(
        checkSchema(validateId),
        body("amount")
            .exists()
            .notEmpty()
            .isNumeric()
            .custom((val) => val > 0),
        body("expanceDate")
            .exists()
            .notEmpty()
            .custom((val) => {
                if (
                    new Date(val).toISOString().split("T")[0] <=
                    new Date().toISOString().split("T")[0]
                )
                    return true;
            })
            .withMessage("The date should not be greater than today."),
        updateExpence
    )
    .delete(checkSchema(validateId), deleteExpence);

router.route("/categoryId/:categoryId").delete(deleteExpencesByCategoryId);

export default router;
