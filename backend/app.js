import express, { urlencoded } from "express";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE ,PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

import categoryRoute from "./routes/category.routes.js";
import expenceRoute from "./routes/expence.routes.js";

app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/expences", expenceRoute);

export default app;
