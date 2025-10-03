
import { Request, Response, NextFunction } from "express";
import * as simService from "../services/simService.js";


export async function getAllSims(req: Request, res: Response, next: NextFunction) {
  try {
    const sims = await simService.getAll();
    const meta = await simService.getSimsMeta();

    res.json({
      meta,
      data: sims,
    });
  } catch (err) {
    next(err); 
  }
}


export async function getSimById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const sim = await simService.getById(id);

    if (!sim) {
      const error: any = new Error("Sim ej hittad");
      error.status = 404;
      throw error; 
    }

    res.json(sim);
  } catch (err) {
    next(err);
  }
}
