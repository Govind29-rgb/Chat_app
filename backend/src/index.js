import dotenv from "dotenv";
dotenv.config();  // Load environment variables

console.log("PORT:", process.env.PORT); // Debugging
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Loaded" : "Not Loaded");

import express from "express";
const app = express();
app.use(express.json());
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
    connectDB();
});
