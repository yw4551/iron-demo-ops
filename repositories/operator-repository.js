import pool from "../db/database.js";

export async function saveOperator(name, rank) {
    const [result] = await pool.execute(
        "INSERT INTO operators (name, `rank`) VALUES (?, ?)",
        [name, rank],
    );

    return result.insertId;
}

export async function getOperatorById(operatorId) {
    const [result] = await pool.execute(
        "SELECT * FROM operators WHERE id = ?",
        [operatorId],
    );

    return result[0];
}
