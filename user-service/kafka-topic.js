const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const admin = new kafka.Admin(client);

admin.createTopics(
  [
    {
      topic: 'userServiceResponse',
      partitions: 1,
      replicationFactor: 1,
    },
  ],
  (err, res) => {
    console.log('Topic created', res);
    process.exit();
  }
);
