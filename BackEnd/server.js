// Backend Entry Point
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

//*Importing routes

import { getUserRoute } from "./routes/getUserData.route.js";


//TODO: CONNECT TO DATABASE
const MONGOLINK = "mongodb+srv://dfxdynasty:dfxpass@dfx.cas8rnf.mongodb.net/dfx";
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