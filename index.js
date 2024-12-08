import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movie.route.js";
import favMovieRoutes from "./routes/favMovie.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/movies/favourites", favMovieRoutes);
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server runnigng at port " + PORT);
});
