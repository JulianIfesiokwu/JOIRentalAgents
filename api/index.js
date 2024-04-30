import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./views/user.routes.js";
import authRoutes from "./views/auth.route.js";

// INITIALIZE DOTENV
dotenv.config();

const app = express();

// ENABLE US USE JSON IN REQUESTS
app.use(express.json());

// REMOVE CORS OPTIONS
app.use(cors());

// ALLOW US TO READ COOKIES FROM CLIENT SIDE
app.use(cookieParser());

app.listen("3456", () => {
  console.log("listening on port 3456");
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log(err, "Error connecting to Database");
    });
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
