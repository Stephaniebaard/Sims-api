import { Request, Response } from "express";
import { db } from "../db.js"; 

export async function getHealth(req: Request, res: Response) {
  try {
    
    await db.query("SELECT 1"); 
    res.status(200).json({
      status: "OK",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      database: "disconnected",
      error: err instanceof Error ? err.message : "Unknown error",
      timestamp: new Date().toISOString()
    });
  }
}
