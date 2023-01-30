import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes/index.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware); // must be last in middlewares chain

app.get("/", (req, res) => {
  res.status(200).json("Server working");
});

mongoose.set("strictQuery", true);

const startApp = async () => {
  const db = mongoose.connection;

  try {
    mongoose.connect(DB_URL);

    // mongo db connection succeed check
    db.once("open", (_) => {
      console.log("Database connected:", DB_URL);
    });
    db.on("error", (err) => {
      console.error("connection error:", DB_URL);
    });

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

startApp();
