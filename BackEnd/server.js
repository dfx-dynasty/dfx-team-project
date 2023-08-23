// Backend Entry Point
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });

const port = process.env.PORT;
const host = process.env.HOST;

//*Importing routes
import { getUserRoute } from "./routes/getUserData.route.js";
import { updateBioRoute } from "./routes/updateBio.route.js";

//TODO: CONNECT TO DATABASE
// const MONGOLINK = 'mongodb+srv://dfxdynasty:dfxpass@dfx.cas8rnf.mongodb.net/dfx'

const databaseConnect = async () => {
  console.log("connecting to mongo...");
  await mongoose.connect(process.env.DBURI);
  console.log(`connected to db: ${process.env.DBURI}`);
};

databaseConnect().catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/getdata", getUserRoute);
app.use("/updatebio", updateBioRoute);

const SERVER = app.listen(port, host, () => {
  console.log(`server running on https://${host}:${port}`);
});

export default SERVER;
