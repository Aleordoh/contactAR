import { Router } from "express";
const router = Router();
import mainController from "../controllers/main.controller.js";

router.get("/", mainController.index);

export default router;