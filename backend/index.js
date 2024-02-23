import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectWithDB from "./DB/dbConnect.js";

connectWithDB();

app.listen(process.env.PORT, () =>
    console.log(`server is up and running on port ${process.env.PORT}`)
);
