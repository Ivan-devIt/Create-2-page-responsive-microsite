import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/";
import { router } from "./routers";
import { connectDb } from "./connectDb";

const { PORT, CLIENT_URL } = config;
const app: Express = express();

app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);

const start = async () => {
  try {
    connectDb();

    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is  running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
