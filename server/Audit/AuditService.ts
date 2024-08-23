import { Observer } from "./AuditObserver";
import { CreateAudit } from "../Controller/Audit/Audit.controller";
class AuditService implements Observer {
  async update(event: string, data: any): Promise<void> {
    try {
      let logMessage = "";
      switch (event) {
        case "UserCreated":
          console.log(`Audit log: UserCreated - ${JSON.stringify(data)}`);
          break;

        case "UserUpdated":
          console.log(`Audit log: UserUpdate - ${JSON.stringify(data)}`);
          break;

        case "UserLogin":
          console.log(`Audit log: UserLogin - ${JSON.stringify(data)}`);
          break;

        default:
          logMessage = `Unhandled event ${event} - ${JSON.stringify(data)}`;
      }
      console.log(`Audit log: ${logMessage}`);

      await CreateAudit(event, data);
    } catch (error) {
      console.error("Failed to save audit log:", error);
    }
    /* console.log(`Audit log: ${event} - ${JSON.stringify(data)}`); */
    // Aquí puedes implementar la lógica para guardar el log en la base de datos o un archivo
  }
}

export default AuditService;
