import pool from "../db/database.js";

export async function saveIncident(codeName, threatLevel, operatorId) {
    const [result] = await pool.execute(
        "INSERT INTO incidents (code_name, threat_level, status, operator_id) VALUES (?, ?, ?, ?)",
        [codeName, threatLevel, "OPEN", operatorId],
    );
    return result.insertId;
}
