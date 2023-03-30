import { Kafka } from "kafkajs";

export const kafkaConfig = new Kafka({
  clientId: "user-microservice",
  brokers: ["localhost:9092"],
});
