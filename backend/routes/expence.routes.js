import express from "express";
const router = express.Router();
import validator, { checkSchema } from "express-validator";
import {
    createExpence,
    getAllExpences,
    getAExpence,
    updateExpence,
    deleteExpence,
} from "../controllers/expence.controller.js";
import { expenceValidationSchema } from "../validatorSchemas/expence.validateSchema.js";
import { validateId } from "../validatorSchemas/id.validationSchema.js";

router.route("/new").post(checkSchema(expenceValidationSchema), createExpence);
router.route("/all").get(getAllExpences);
router
    .route("/:id")
    .get(validator.check("id").isMongoId(), getAExpence)
    .patch(checkSchema(expenceValidationSchema), updateExpence)
    .delete(checkSchema(validateId), deleteExpence);

export default router;
