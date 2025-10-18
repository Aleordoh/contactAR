import { Router } from "express";
const router = Router();
import authController from '../controllers/auth.controller.js'

router.get("/login", authController.login);

export default router;