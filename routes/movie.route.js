import express from "express";
import {
  createMovie,
  deleteMovie,
  getFeaturedMovies,
  getMovies,
  getSingleMovive,
  getUserMovies,
  updateMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

// Get All Movies
router.get("/", getMovies);

// get single Movie
router.get("/movie/:id", getSingleMovive);

// Create new Movie
router.post("/", createMovie);

// Get User Movie
router.get("/:uid", getUserMovies);

// Update A Movie
router.put("/:id", updateMovie);

// Delete a movie
router.delete("/:id", deleteMovie);

// Get featured movies
router.get("/featured", getFeaturedMovies);

export default router;
