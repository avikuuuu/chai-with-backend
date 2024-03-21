// Importing necessary modules for creating an Express app
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// Creating an Express app
const app = express();

// Configuring CORS to allow requests from a specified origin
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Adding middleware to parse JSON requests with a size limit of 16KB
app.use(
  express.json({
    limit: "16kb",
  })
);

// Adding middleware to parse URL-encoded requests with extended options and a size limit of 16KB
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// Serving static files from the 'public' directory
app.use(express.static("public"));

// Adding middleware for parsing cookies
app.use(cookieParser());


//routes import
import userRoutes from './routes/user.route.js'


//routes declaration

app.use('/api/v1/users',userRoutes)











// Exporting the configured Express app
export { app };
