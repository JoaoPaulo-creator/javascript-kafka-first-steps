import { PrismaClient } from "@prisma/client";
import cartService from "../services/cart-service";

class CartController {
  async createCart(req, res) {
    const { userId, userName, order } = req.body;

    return await cartService
      .store(userId, userName, order)
      .then((response) => {
        return res.status(201).json({ order: response });
      })
      .catch((err) => res.json({ error: err.message }));
  }

  async getOrders(req, res) {
    const orders = await new PrismaClient().cart.findMany();

    return res.json(orders);
  }
}

export default new CartController();
