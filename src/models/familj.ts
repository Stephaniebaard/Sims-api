import { RowDataPacket } from "mysql2";

export interface Familj extends RowDataPacket {
  FamiljID: number;
  Namn: string;
  Datum: Date;
}

export interface FamiljSimMeta extends RowDataPacket {
  FamiljID: number;
  antalSims: number;
}

export interface FamiljWithSimCount extends RowDataPacket {
  FamiljID: number;
  Namn: string;
  antalSims: number;
}

