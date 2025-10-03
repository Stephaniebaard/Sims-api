import { db } from "../db.js";
import { Familj, FamiljSimMeta, FamiljWithSimCount } from "../models/familj.js";

export async function getAllFamiljer(): Promise<Familj[]> {
  const [rows] = await db.query<Familj[]>("SELECT * FROM familj");
  return rows;
}

export async function getFamiljById(id: number): Promise<Familj | null> {
  const [rows] = await db.query<Familj[]>("SELECT * FROM familj WHERE FamiljID = ?", [id]);
  return rows.length > 0 ? rows[0] : null;
}

export async function getFamiljerMeta(): Promise<FamiljSimMeta[]> {
  const [rows] = await db.query<FamiljSimMeta[]>(
    "SELECT FamiljID, COUNT(*) as antalSims FROM sim GROUP BY FamiljID"
  );
  return rows;
}

export async function getFamiljWithSimCount(): Promise<FamiljWithSimCount[]> {
  const [rows] = await db.query<FamiljWithSimCount[]>(
    `SELECT f.FamiljID, f.Namn, COUNT(s.simID) as antalSims
     FROM familj f
     LEFT JOIN sim s ON f.FamiljID = s.FamiljID
     GROUP BY f.FamiljID, f.Namn`
  );
  return rows;
}
