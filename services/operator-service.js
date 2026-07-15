import { saveOperator } from "../repositories/operator-repository.js";

export async function createOperatorService(name, rank) {
    return await saveOperator(name, rank);
}
