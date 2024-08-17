import { Observer } from "./AuditObserver";

class AuditService implements Observer {
  update(event: string, data: any): void {
    console.log(`Audit log: ${event} - ${JSON.stringify(data)}`);
    // Aquí puedes implementar la lógica para guardar el log en la base de datos o un archivo
  }
}

export default AuditService;
