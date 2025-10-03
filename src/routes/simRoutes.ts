import { Router } from "express";
import { getAllSims, getSimById } from "../controllers/simController.js";

const router = Router();

router.get("/", getAllSims);
router.get("/:id", getSimById);

export default router;
