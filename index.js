import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server runnigng at port " + PORT);
});
