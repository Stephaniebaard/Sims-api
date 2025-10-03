import { Request, Response, NextFunction } from "express";
import * as familjService from "../services/familjService.js";


export async function getFamilj(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const familj = await familjService.getFamiljById(id);

    if (!familj) {
      const error: any = new Error("Familj ej hittad");
      error.status = 404;
      throw error; 
    }

    res.json(familj);
  } catch (err) {
    next(err);
  }
}

export async function getAllFamiljer(req: Request, res: Response, next: NextFunction) {
  try {
    const familjer = await familjService.getAllFamiljer();
    const meta = await familjService.getFamiljerMeta();

    res.json({
      meta,
      data: familjer,
    });
  } catch (err) {
    next(err);
  }
}

export async function getFamiljerWithSimCount(req: Request, res: Response, next: NextFunction) {
  try {
    const familjer = await familjService.getFamiljWithSimCount();
    res.json(familjer);
  } catch (err) {
    next(err);
  }
}
