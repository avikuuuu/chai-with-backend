import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
    try {
        // Construct the MongoDB URI string
        const uri = `${process.env.MONGODB_URL}/${DB_NAME}`;

        // Connecting to MongoDB using Mongoose
        const connectionInstance = await mongoose.connect(uri);
        
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Handling errors during the database connection
        console.log("Error while connecting to database : " + error);
        process.exit(1);
    }
};

// Exporting the ConnectDB function
export default ConnectDB;
