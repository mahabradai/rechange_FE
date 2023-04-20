import { Marque } from "../marque/marque";

export interface Type {
    id: number;
    name: string;
    year: number;
    marque: Marque;
  }
