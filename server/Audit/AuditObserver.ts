export interface Observer {
  update(event: string, data: any): void;
}

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(event: string, data: any): void;
}
