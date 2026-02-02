import express from "express";
import journalRoute from "./routes/journalRoute.js";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/journal", journalRoute);


    app.listen(PORT, "0.0.0.0", ()=>{
    console.log("Successfully at ${PORT}");
})
