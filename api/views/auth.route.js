import express from "express";
import { login, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.get("/login", login);

export default router;
