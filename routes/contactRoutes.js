import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // log request body correctly
        console.log("BODY:", req.body);
        const saved = await Contact.create(req.body);
        
        res.status(201).json({ success: true });

    } catch (err) {
        console.log("ERROR:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
})

export default router;