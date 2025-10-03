import { Request, Response, NextFunction } from "express";
import * as varldService from "../services/varldService.js";

export async function getvarldar(req: Request, res: Response,  next: NextFunction) {
  try {
    const varldar = await varldService.getAllVarldar();
    res.json(varldar);
  } catch (err) {
    next(err);
  }
}

export async function getvarld(req: Request, res: Response,  next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const varld = await varldService.getVarldById(id);

    if (!varld) {
      return res.status(404).json({ error: "Familj ej hittad" });
    }

    res.json(varld);
    } catch (err) {
    next(err);
  }
}
