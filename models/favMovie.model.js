import mongoose from "mongoose";

const favMovieSchema = new mongoose.Schema({
  movie: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Movie",
  },
  uid: {
    type: String,
    required: true,
  },
});

const FavMovie = mongoose.model("FavMovie", favMovieSchema);

export default FavMovie;
