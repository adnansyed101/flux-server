import express from "express";
import {
  createMovie,
  deleteMovie,
  getFeaturedMovies,
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

// Delete a movie
router.delete("/:id", deleteMovie);

// Get featured movies
router.get("/featured", getFeaturedMovies);

export default router;
