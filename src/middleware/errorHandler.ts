import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error:", err);

 
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: err.message || "Något gick fel",
      status,
    },
  });
}
