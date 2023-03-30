import { Router } from "express";
import UserController from "./controllers/user-controller";
export const router = Router();

router.get("/users", UserController.findAll);
router.post("/users", UserController.create);
