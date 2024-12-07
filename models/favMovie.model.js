import mongoose from "mongoose";

const favMovieSchema = new mongoose.Schema({
  movie: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Movie",
  },
});

const FavMovie = mongoose.model("FavMovie", favMovieSchema);

export default FavMovie;
