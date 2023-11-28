import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
  getTopRatedGigs,
  sellerGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);
router.get("/sellergigs/:s_id",sellerGigs);
router.get("/top-10", getTopRatedGigs);
export default router;
