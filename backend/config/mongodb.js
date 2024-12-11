import mongoose from "mongoose";

//connecting to mongoDB
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database Connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/docapp`);
};

export default connectDB;
