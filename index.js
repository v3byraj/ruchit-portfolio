import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/contact", contactRoutes)

mongoose.connect(process.env.MONGODB)
    .then(() => console.log("MongoDB Connected"))
    .catch(console.error);


app.listen(5000, () => {
    console.log("Server running on port 5000");
})