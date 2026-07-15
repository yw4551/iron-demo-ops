import pool from "../db/database.js";
import fs from "fs/promises";

export async function createTables() {
    try {
        const fileContent = await fs.readFile("./db/db.sql", "utf-8");
        pool.query(fileContent);
    } catch (err) {
        console.error(err);
    }
}
