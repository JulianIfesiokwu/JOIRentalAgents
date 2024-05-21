import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyTokens } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyTokens, createListing);

export default router;
