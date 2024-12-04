import express from "express";
import {
  createMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

// Get All Movies
router.get("/", getMovies);

// Create new Movie
router.post("/", createMovie);

// Update A Movie
router.put("/:id", updateMovie);

export default router;
