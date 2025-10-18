import { Router } from "express";
const router = Router();
import userController from '../controllers/user.controller.js'

router.get("/register", userController.register);
router.post("/register", userController.registerProcess);

export default router;