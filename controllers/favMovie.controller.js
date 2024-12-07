import FavMovie from "../models/favMovie.model.js";

export const addMovieToFav = async (req, res) => {
  const movie = req.body;

  if (!movie) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newFavMovie = new FavMovie(movie);

  try {
    await newFavMovie.save();
    res.status(201).json({ success: true, data: newFavMovie });
  } catch (err) {
    console.error("Error in creating movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
