import express from "express";
import dotenv from "dotenv";
import { createTables } from "./utils/table-utils.js";
import operatorRouter from "./routes/operator-route.js";

dotenv.config();

createTables();

const app = express();

app.use(express.json());
app.use("/operators", operatorRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
