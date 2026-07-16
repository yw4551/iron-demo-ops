import { saveIncident } from "../repositories/incident-repository.js";

export async function createIncidentService(codeName, threatLevel, operatorId) {
    return await saveIncident(codeName, threatLevel, operatorId);
}
