import { Observer } from "./AuditObserver";

class AuditService implements Observer {
  update(event: string, data: any): void {
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
        console.log(`Audit log: Unhandled event ${event}`);
    }
    /* console.log(`Audit log: ${event} - ${JSON.stringify(data)}`); */
    // Aquí puedes implementar la lógica para guardar el log en la base de datos o un archivo
  }
}

export default AuditService;
