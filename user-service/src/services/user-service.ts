import { kafkaConfig } from "../config/kafka-config";
import UserRepository from "../domain/repositories/user-repository";
import { getUsers, saveOnCartService } from "../shared/cart-service";

class UserService {
  private topic = "user-creation";
  private producer = kafkaConfig.producer();

  private async produce(topic, value) {
    await this.producer.connect();

    this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(value) }],
    });
    await this.producer.disconnect();
  }

  async store(name: string, email: string) {
    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      throw new Error("Email is already in use");
    }

    const user = await UserRepository.createUser(name, email);
    await saveOnCartService(user);
    await this.produce(this.topic, user);
    return user;
  }

  async findAll() {
    const users = await UserRepository.getUsers();
    await getUsers();

    return users;
  }
}

export default new UserService();
