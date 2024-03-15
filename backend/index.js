import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectWithDB from "./DB/dbConnect.js";
import twilio from "twilio";

export const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTHTOKEN
);

connectWithDB();

app.listen(process.env.PORT, () =>
    console.log(`server is up and running on port ${process.env.PORT}`)
);
