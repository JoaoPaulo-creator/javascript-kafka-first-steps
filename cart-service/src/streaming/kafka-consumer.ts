import { Consumer, KafkaClient } from "kafka-node";
// TODO: Learn how to save comsumed messages from kafka or extract id to create a cart
export function kafkaNodeConsumer() {
  const client = new KafkaClient({ kafkaHost: "localhost:9092" });
  const consumer = new Consumer(client, [{ topic: "user-creation" }], {
    autoCommit: true,
    fromOffset: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
  });

  consumer.on("message", (message: any) =>
    console.log(JSON.parse(message.value))
  );
}
