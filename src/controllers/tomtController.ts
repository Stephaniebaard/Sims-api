import { Request, Response, NextFunction } from "express";
import * as tomtService from "../services/tomtService.js";

export async function getTomter(req: Request, res: Response, next: NextFunction) {
  try {
    const tomter = await tomtService.getAllTomter();
    res.json(tomter);
  } catch (err) {
    next(err); 
  }
}


export async function getTomt(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const tomt = await tomtService.getTomtById(id);

    if (!tomt) {
      return res.status(404).json({ error: "Tomt ej hittad" });
    }

    res.json(tomt);
   } catch (err) {
    next(err);
  }
}
