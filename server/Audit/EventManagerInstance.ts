import EventManager from "./EventManager";
import AuditService from "./AuditService";

// Crear la instancia única de EventManager
const eventManager = new EventManager();

// Crear y registrar el observador de auditoría
const auditService = new AuditService();
eventManager.addObserver(auditService);

export default eventManager;
