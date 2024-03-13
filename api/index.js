import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// INITIALIZE DOTENV
dotenv.config();

const app = express();

app.listen("3456", () => {
  console.log("listening on port 3456");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Error connecting to Database");
  });
