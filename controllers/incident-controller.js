import { createIncidentService } from "../services/incident-service.js";
import { getOperatorById } from "../repositories/operator-repository.js";

export async function createIncident(req, res) {
    try {
        const { code_name, threat_level, operator_id } = req.body;
        const codeNames = [
            "RED SKY",
            "BLACK FALCON",
            "IRON SHIELD",
            "NIGHT ARROW",
            "SILENT DONE",
        ];
        const threadLevels = ["NEW", "MEDIUM", "HIGH", "CRITICAL"];

        if (!code_name) {
            return res.status(400).json({
                success: false,
                message: "code_name is required.",
            });
        }

        if (!threat_level) {
            return res.status(400).json({
                success: false,
                message: "threat_level is required.",
            });
        }

        if (!operator_id) {
            return res.status(400).json({
                success: false,
                message: "operator_id is required.",
            });
        }

        if ((!code_name) in codeNames) {
            return res.status(400).json({
                success: false,
                message: "code_name not allowed.",
            });
        }

        if ((!threat_level) in threadLevels) {
            return res.status(400).json({
                success: false,
                message: "threat_level not allowed.",
            });
        }

        if (!getOperatorById(operator_id)) {
            return res.status(404).json({
                success: false,
                message: "Operator not found",
            });
        }

        const newIncident = createIncidentService(
            code_name,
            threat_level,
            operator_id,
        );

        return res.status(201).json({
            success: true,
            message: `Incident created with ID ${newIncident}`,
        });
    } catch (err) {
        console.error(err);
    }
}
