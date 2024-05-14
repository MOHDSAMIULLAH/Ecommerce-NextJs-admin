import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  console.log(process.env.NEXT_PUBLIC_MONGODB_URL,"process.env.NEXT_PUBLIC_MONGODB_URL");
  
  mongoose.set("strictQuery", true)

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL || "", {
      dbName: "Borcelle_Admin"
    })

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err)
  }
}