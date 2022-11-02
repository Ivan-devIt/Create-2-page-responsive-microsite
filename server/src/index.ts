import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/";
import { router } from "./routers";
import mongoose from "mongoose";

const { PORT, DATABASE_URL, CLIENT_URL } = config;
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

export const connectDb = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

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
