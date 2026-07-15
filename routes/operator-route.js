import express from "express";
import { createOperator } from "../controllers/operator-controller.js";

const router = express.Router();

router.post("/", createOperator);

export default router;
