import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
};
