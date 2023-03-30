import { Router } from "express";
import cartController from "./controllers/cart-controller";

export const router = Router();

router.post("/orders", cartController.createCart);
router.get("/orders", cartController.getOrders);
