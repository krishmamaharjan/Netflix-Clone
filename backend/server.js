import express from 'express';

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import tvRoutes from "./routes/tv.routes.js";

import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
// import dotenv from "dotenv";

// dotenv.config();
const app = express();

const PORT = ENV_VARS.PORT;

// console.log("MONGO_URI: ", process.env.MONGO_URI);
app.use(express.json());    //will allow us to parse req.body
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",movieRoutes);
app.use("/api/v1/tv",tvRoutes);


app.listen(PORT, () =>{ 
    console.log("Server started at http://localhost:"+PORT);
    connectDB();
});



