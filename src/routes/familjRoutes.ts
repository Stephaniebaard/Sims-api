import { Router } from "express";
import { getAllFamiljer, getFamilj } from "../controllers/familjController.js";

const router = Router();

router.get("/", getAllFamiljer);
router.get("/:id", getFamilj);

export default router;
