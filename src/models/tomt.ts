import { RowDataPacket } from "mysql2";

export interface Tomt extends RowDataPacket {
  TomtID: number;
  Namn: string;
  Beskrivning: string;
  Pris: number;
  VarldID: number;
}
