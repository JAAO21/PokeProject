import { Response, Request, NextFunction } from "express";
import FactoryModel from "../../Models/Factory.model";

const AuditModel = FactoryModel.createModel("Audit");
export const AllAudit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const logs = await AuditModel.find()
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.status(200).send(logs);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const CreateAudit = async (event: string, data: any) => {
  try {
    const audit = new AuditModel({
      event,
      data,
      timestamp: new Date(),
    });

    await audit.save();
  } catch (error) {
    console.error("Failed to save audit log:", error);
    // Podrías manejar el error de manera más detallada aquí, por ejemplo, registrando el error en un servicio de monitoreo.
  }
};
