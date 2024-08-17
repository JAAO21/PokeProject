import { Request, Response, NextFunction } from "express";
import EventManager from "../Audit/EventManager";
import AuditService from "../Audit/AuditService";

const eventManager = new EventManager();
const auditService = new AuditService();

// Añadir el servicio de auditoría como observador
eventManager.addObserver(auditService);

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Lógica para crear usuario
    const user = {}; // Suponiendo que este es el usuario creado

    // Notificar a los observadores que un usuario ha sido creado
    eventManager.notifyObservers("UserCreated", user);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
