import express from "express";
import { createMovie } from "../controllers/movie.controller.js";

const router = express.Router();

// Create new product
router.post("/", createMovie);

export default router;
