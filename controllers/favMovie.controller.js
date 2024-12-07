import FavMovie from "../models/favMovie.model.js";

export const addMovieToFav = async (req, res) => {
  const favMovie = req.body;

  if (
    !favMovie.imgLink ||
    !favMovie.title ||
    !favMovie.genre ||
    !favMovie.duration ||
    !favMovie.year ||
    !favMovie.rating ||
    !favMovie.summary ||
    !favMovie.email
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newFavMovie = new FavMovie(favMovie);

  try {
    await newFavMovie.save();
    res.status(201).json({ success: true, data: newFavMovie });
  } catch (err) {
    console.error("Error in creating movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllFavMovie = async (req, res) => {
  const email = req.params.email;
  try {
    const favMovies = await FavMovie.find({}).where("email").equals(email);

    res.status(201).json(favMovies);
  } catch (err) {
    console.error("Error in creating movie: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
