import { Response, Request, NextFunction } from "express";
interface JsonError {
  toJson: () => { status: number; name: string; message: string };
}
const handleError = (
  error: JsonError | unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errorObject;
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
  return res.status(errorObject.status).json(errorObject);
};

export default handleError;
