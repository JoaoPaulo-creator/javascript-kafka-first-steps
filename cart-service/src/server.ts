import express from "express";
import { corsMiddleware } from "./middlewares/cors";
import { router } from "./routes";
import { sharedRoutes } from "./shared/user-service";

const app = express();
const cors = corsMiddleware;

app.use(express.json());
app.use(cors);
app.use(sharedRoutes);
app.use(router);

app.listen(3002, () => {
  console.log("⏱️  Starting application");
  console.log("🚀 Server is running at 3002");
});
