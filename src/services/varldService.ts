import { db } from "../db.js";
import { Varld } from "../models/varld.js";

export async function getAllVarldar(): Promise<Varld[]> {
  const [rows] = await db.query<Varld[]>("SELECT * FROM varld");
  return rows;
}

export async function getVarldById(id: number): Promise<Varld | null> {
  const [rows] = await db.query<Varld[]>("SELECT * FROM varld WHERE varldID = ?",[id] );
  return rows.length > 0 ? rows[0] : null;
}
