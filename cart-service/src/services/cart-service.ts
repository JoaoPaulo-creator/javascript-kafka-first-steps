import { kafkaConfig } from "../config/kafka";
import cartRepo from "../repository/cart-repo";

interface OrderProps {
  title: string;
  price: number;
}

class CartService {
  private consumer = kafkaConfig.consumer({ groupId: "user-microservice" });

  async store(userId, userName, order: OrderProps) {
    const createOrder = await cartRepo.createOrder(userId, userName, order);
    return createOrder;
  }
}

export default new CartService();
