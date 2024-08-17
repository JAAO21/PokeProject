import { Subject, Observer } from "./AuditObserver";

class EventManager implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(event: string, data: any): void {
    for (const observer of this.observers) {
      observer.update(event, data);
    }
  }
}

export default EventManager;
