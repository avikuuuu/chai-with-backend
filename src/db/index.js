import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 const ConnectDB=async()=>{
    //importing the mongoose module
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
        
    } catch (error) {
        console.log("Error while connecting to database : "+ error);
        process.exit(1)
    }
}

export default ConnectDB