import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
// import dotenv from "dotenv";

// dotenv.config();
const app = express();

// console.log("MONGO_URI: ", process.env.MONGO_URI);
app.use(express.json());    //will allow us to parse req.body
app.use("/api/v1/auth",authRoutes)

const PORT = ENV_VARS.PORT

app.listen(PORT, () =>{ 
    console.log("Server started at http://localhost:"+PORT);
    connectDB();
});
