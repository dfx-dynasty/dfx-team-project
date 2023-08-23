import express from "express";
import { updateBioControl } from "../controllers/updateBio.controller.js";

const router = express.Router();

router.route('/').put(updateBioControl)

export { router as updateBioRoute }