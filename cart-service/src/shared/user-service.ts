import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();

export const sharedRoutes = Router();

sharedRoutes.post("/cart-users", async (req, res) => {
  const { id, name, email } = req.body;
  const user = await prisma.users.create({
    data: {
      user: id,
      name,
      email,
    },
  });

  return res.status(201).json(user);
});

sharedRoutes.get("/users-from-user-service", async (req, res) => {
  const users = await prisma.users.findMany();
  return res.status(200).json(users);
});
