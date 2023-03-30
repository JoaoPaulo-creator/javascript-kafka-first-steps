import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default new (class UserRepository {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async createUser(name: string, email: string) {
    const user = await prisma.user.create({ data: { name, email } });
    return user;
  }
})();
