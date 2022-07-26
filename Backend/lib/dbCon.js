import mongoose from "mongoose";
export const connect = await mongoose.connect(
    "mongodb://localhost:27017/UserManagement"
  );
  if (connect) {
    console.log("mongodb connected");
  }else{
    console.log("mongodb not connected");
  }


