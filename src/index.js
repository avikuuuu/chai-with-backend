import dotenv from 'dotenv';
import ConnectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './env'
});

/**
 * Establishes a connection to MongoDB and starts the server.
 */
ConnectDB().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is Running on ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log('====================================');
    console.log("MongoDB connection failed !!!", err);
    console.log('====================================');
});

/*
// The commented-out code below seems to be an alternative approach to establish the MongoDB connection and start the server.
// Uncomment and modify it as needed.

import express from 'express';
const app = express();

(async () => {
    try {
        await Mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log('Error connecting to database: ', error);
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})();
*/
