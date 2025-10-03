import { Router } from "express";
import { getvarldar, getvarld } from "../controllers/varldController.js";

const router = Router();

router.get("/", getvarldar);
router.get("/:id", getvarld);

export default router;
