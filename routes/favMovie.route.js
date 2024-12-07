import express from "express";
import { addMovieToFav } from "../controllers/favMovie.controller.js";

const router = express.Router();

// Create new Favourite Movie
router.post("/", addMovieToFav);

export default router;
