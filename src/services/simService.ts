
import { db } from "../db.js";
import { Sim } from "../models/sim.js";

export async function getAll(): Promise<Sim[]> {
  const [rows] = await db.query<Sim[]>("SELECT * FROM sim");
  return rows;
}

export async function getById(id: number): Promise<Sim | null> {
  const [rows] = await db.query<Sim[]>("SELECT * FROM sim WHERE simID = ?", [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function getSimsMeta() {
  const [rows] = await db.query<Sim[]>(
    "SELECT COUNT(*) as total FROM sim"
  );
  return rows[0]; 
}
