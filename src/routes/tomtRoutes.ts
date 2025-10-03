import { Router } from "express";
import { getTomter, getTomt } from "../controllers/tomtController.js";

const router = Router();

router.get("/", getTomter);
router.get("/:id", getTomt);

export default router;




