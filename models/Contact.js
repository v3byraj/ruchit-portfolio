import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("contact", contactSchema)