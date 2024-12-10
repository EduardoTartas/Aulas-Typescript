import { Cidade } from "../models/cidades";

export interface Estudante {
    id:string;
    nome: string;
    email: string;
    idade: number;
    cidade: Cidade;
}