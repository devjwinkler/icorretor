import cors from "cors";
import express from "express";
import helmet from "helmet";

const webOrigin = process.env.WEB_ORIGIN ?? "http://localhost:5173";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: webOrigin,
  }),
);
app.use(express.json());

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok" });
});
