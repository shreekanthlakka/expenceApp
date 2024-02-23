import mongoose from "mongoose";

const connectWithDB = () => {
    mongoose
        .connect(process.env.DB_URI)
        .then((data) =>
            console.log(
                "👍👍mongoDB connected  successfully to",
                data.connection.host
            )
        )
        .catch((error) => {
            console.log("error while connecting to DB", error);
            process.exit(1);
        });
};

export default connectWithDB;
