import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
  // Ajoutez d'autres options CORS si nécessaire
};

app.get("/", (req, res) => {
  res.send("Api is working");
});

// Connexion à la base de données
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Arrête le processus en cas d'échec de connexion
  }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.listen(port, () => {
  connectDB();
  console.log("Server is running on port: " + port);
});
