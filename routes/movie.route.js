import express from "express";
import {
  createMovie,
  deleteMovie,
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

export default router;
