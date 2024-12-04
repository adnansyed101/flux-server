import Movie from "../models/movie.model.js";
import mongoose from "mongoose";

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
    res.status(201).json({ success: true, data: newMovie });
  } catch (err) {
    console.error("Error in creating movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json({ success: true, data: movies });
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


    res.status(200).json({ success: true, data: updatedMovie });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
