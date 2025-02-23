import Movie from "../models/movie.model.js";
import mongoose from "mongoose";

export const getSingleMovive = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Movie Id" });
  }

  try {
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createMovie = async (req, res) => {
  const movie = req.body;

  if (
    !movie.imgLink ||
    !movie.title ||
    !movie.genre ||
    !movie.duration ||
    !movie.year ||
    !movie.rating ||
    !movie.summary
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newMovie = new Movie(movie);

  try {
    await newMovie.save();
    res.status(201).json(movie);
  } catch (err) {
    console.error("Error in creating movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMovies = async (req, res) => {
  const { search } = req.query;
  const { sort } = req.query;

  let option = {};

  if (sort) {
    option = { sort: { rating: sort === "asc" ? 1 : -1 } };
  }

  let query = {
    title: {
      $regex: search,
      $options: "i",
    },
  };

  try {
    const movies = await Movie.find(query, null, option);
    res.status(200).json(movies);
  } catch (err) {
    console.error("Error in fetching movie" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, movie, {
      new: true,
    });

    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Movie Id" });
  }

  try {
    await Movie.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Movie Deleted" });
  } catch (err) {
    console.error("Error in Deleting movies" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getFeaturedMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ rating: -1 }).limit(6);
    res.status(200).json(movies);
  } catch (err) {
    console.error("Error in fetching movie" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
