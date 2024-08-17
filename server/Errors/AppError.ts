class AppError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = this.constructor.name;
  }
  toJson() {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
    };
  }
}

export default AppError;
