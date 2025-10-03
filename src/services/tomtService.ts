import { db } from "../db.js";
import { Tomt } from "../models/tomt.js";

export async function getAllTomter(): Promise<Tomt[]> {
  const [rows] = await db.query<Tomt[]>("SELECT * FROM tomt");
  return rows;
}

export async function getTomtById(id: number): Promise<Tomt | null> {
  const [rows] = await db.query<Tomt[]>("SELECT * FROM tomt WHERE TomtID = ?",[id] );
  return rows.length > 0 ? rows[0] : null;
}
