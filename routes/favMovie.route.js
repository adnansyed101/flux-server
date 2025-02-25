import express from "express";
import {
  addMovieToFav,
  deleteFavMovie,
  getAllFavMovie,
} from "../controllers/favMovie.controller.js";

const router = express.Router();

// Get All Favourite Movies
router.get("/:uid", getAllFavMovie);

// Delete Favourite Movies
router.delete("/:id", deleteFavMovie);

// Create new Favourite Movie
router.post("/", addMovieToFav);

export default router;
