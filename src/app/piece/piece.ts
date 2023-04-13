import { Type } from "../type/type";

export interface Piece {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: Type;
}
