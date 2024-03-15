import express, { urlencoded } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser());

app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE ,PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

import categoryRoute from "./routes/category.routes.js";
import expenceRoute from "./routes/expence.routes.js";
import userRoute from "./routes/user.routes.js";

app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/expences", expenceRoute);
app.use("/api/v1/users", userRoute);

export default app;
