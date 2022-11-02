import mongoose from "mongoose";
import config from "./config/";

const { DATABASE_URL } = config;

export const connectDb = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
