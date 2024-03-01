import mongoose from "mongoose";

const expenceSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        expanceDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Expence = mongoose.model("Expance", expenceSchema);
export default Expence;
