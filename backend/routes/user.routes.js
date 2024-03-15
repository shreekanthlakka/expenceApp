import express from "express";
const router = express.Router();
import { checkSchema } from "express-validator";
import { userValidationSchema } from "../validatorSchemas/user.validateSchema.js";
import { validateId } from "../validatorSchemas/id.validationSchema.js";

import {
    login,
    logout,
    register,
    sendMessage,
    getLoggedInUserDetails,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

router.route("/login").post(login);
router.route("/register").post(checkSchema(userValidationSchema), register);
router.route("/logout").get(isLoggedIn, logout);
router.route("/sendMessage").post(sendMessage);
router.route("/getLoggedInUserDetails").get(isLoggedIn, getLoggedInUserDetails);

export default router;
