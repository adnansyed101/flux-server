import express from "express";
import { createMovie, getMovies } from "../controllers/movie.controller.js";

const router = express.Router();

// Get All Products
router.get("/", getMovies);

// Create new product
router.post("/", createMovie);

export default router;
