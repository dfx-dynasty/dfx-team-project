// Backend Entry Point
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

//*Importing routes

import { getUserRoute } from "./routes/getUserData.route.js";


//TODO: CONNECT TO DATABASE
const MONGOLINK = "mongodb://127.0.0.1:27017/DFXDev";
const databaseConnect = async () => {
    console.log('connecting to mongo...')
    await mongoose.connect(MONGOLINK);
    console.log('connected to db')
}

databaseConnect().catch(err => console.log(err));


app.use(express.json());
app.use('/getdata', getUserRoute);


const SERVER = app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`)
})

export default SERVER;