import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movie.route.js";
import favMovieRoutes from "./routes/favMovie.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello From Movies");
});
app.use("/api/movies/favourites", favMovieRoutes);
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => {
  console.log("Server runnigng at port " + PORT);
});
