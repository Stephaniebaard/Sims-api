import { RowDataPacket } from "mysql2";

export interface Sim extends RowDataPacket {
  simID: number;
  Fnamn: string;
  Enamn: string;
  Alder: string;
  FamiljID: number;
  Egenskaper: string;
}