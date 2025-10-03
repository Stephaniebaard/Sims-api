import { RowDataPacket } from "mysql2";

export interface Varld extends RowDataPacket {
  VarldID: number;
  Namn: string;
  Beskrivning: string;
}
