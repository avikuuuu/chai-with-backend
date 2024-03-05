import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
    try {
        // Connecting to MongoDB using Mongoose
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
    } catch (error) {
        // Handling errors during the database connection
        console.log("Error while connecting to database : " + error);
        process.exit(1);
    }
};

// Exporting the ConnectDB function
export default ConnectDB;
