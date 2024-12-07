import express from "express";
import {
  addMovieToFav,
  getAllFavMovie,
} from "../controllers/favMovie.controller.js";

const router = express.Router();

// Get All Favourite Movies
router.get("/:email", getAllFavMovie);

// Create new Favourite Movie
router.post("/", addMovieToFav);

export default router;
