import dotenv from "dotenv";
dotenv.config();  
import cookieParser from "cookie-parser"

console.log("PORT:", process.env.PORT); // Debugging
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Loaded" : "Not Loaded");

import express from "express";
const app = express();

app.use(express.json());
app.use(cookieParser())
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('api/message',messageRoutes);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
    connectDB();
});
