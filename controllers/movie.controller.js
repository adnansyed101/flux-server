import Movie from "../models/movie.model.js";

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
