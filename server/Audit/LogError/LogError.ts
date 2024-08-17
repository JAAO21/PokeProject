import fs from "fs";
import { Request, Response, NextFunction } from "express";
interface JsonError {
  toJson: () => { status: number; name: string; message: string };
}

const logError = (errorObject: { name: string; message: string }) => {
  const logMessage = `${new Date().toISOString()} - ${errorObject.name}: ${
    errorObject.message
  }\n`;
  fs.appendFile("error.log", logMessage, (err) => {
    if (err) console.error("Error logging to file", err);
  });
};

const handleError = (
  error: JsonError | unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorObject: { status: number; name: string; message: string };

  if (
    typeof error === "object" &&
    error !== null &&
    "toJson" in error &&
    typeof (error as JsonError).toJson === "function"
  ) {
    errorObject = (error as JsonError).toJson();
  } else {
    errorObject = {
      status: 500,
      name: "InternalServerError",
      message: "An unexpected error occurred.",
    };
  }

  logError(errorObject);
  return res.status(errorObject.status).json(errorObject);
};
