import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./views/user.routes.js";
import authRoutes from "./views/auth.route.js";

// INITIALIZE DOTENV
dotenv.config();

const app = express();

// ENABLE US USE JSON IN REQUESTS
app.use(express.json());

app.listen("3456", () => {
  console.log("listening on port 3456");
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log("Error connecting to Database");
    });
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);
