import mongoose from "mongoose";
import FavMovie from "../models/favMovie.model.js";

export const addMovieToFav = async (req, res) => {
  const favMovie = req.body;

  if (!favMovie.uid || !favMovie.movie) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const isExist = await FavMovie.findOne({
    $and: [{ movie: favMovie.movie }, { uid: favMovie.uid }],
  });

  if (isExist) {
    return res.status(202).json({ message: "Movie already added." });
  }

  const newFavMovie = new FavMovie(favMovie);

  try {
    await newFavMovie.save();
    res.status(201).json({ message: "Movie added to favourite." });
  } catch (err) {
    console.error("Error in creating favorite movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllFavMovie = async (req, res) => {
  const uid = req.params.uid;

  try {
    const favMovies = await FavMovie.find({ uid: uid }).populate("movie");
    res.status(201).json(favMovies);
  } catch (err) {
    console.error("Error in getting all favourite movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteFavMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Movie Id" });
  }

  try {
    await FavMovie.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Movie Deleted" });
  } catch (err) {
    console.error("Error in deleting fav movie" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
