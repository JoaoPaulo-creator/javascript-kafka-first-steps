import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface OrderData {
  price: number;
  title: string;
}

class CartRepository {
  async createOrder(buyer, buyerId, { price, title }: OrderData) {
    const order = await prisma.cart.create({
      data: {
        buyer,
        buyerId,
        price,
        title,
      },
    });
    return order;
  }

  async getAllOrders() {
    const orders = await prisma.cart.findMany();
    return orders;
  }
}

export default new CartRepository();
