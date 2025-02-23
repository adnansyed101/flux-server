import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    imgLink: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
