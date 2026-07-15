import { createOperatorService } from "../services/operator-service.js";

export async function createOperator(req, res) {
    try {
        const { name, rank } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required.",
            });
        }

        if (!rank) {
            return res.status(400).json({
                success: false,
                message: "rank is required.",
            });
        }

        const newOperator = await createOperatorService(name, rank);

        return res.status(201).json({
            success: true,
            message: `Operator created with ID ${newOperator}`,
        });
    } catch (err) {
        console.log(err);
    }
}
