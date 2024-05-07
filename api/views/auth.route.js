import express from "express";
import {
  login,
  signUp,
  google,
  logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", login);
router.post("/google", google);
router.get("/logout", logout);

export default router;
