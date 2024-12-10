import { Estudante } from "./../models/estudante";
import { Cidade } from "./../models/cidades";
import { Estados } from "../enums/estados";
import { v4 as uuid } from 'uuid';
import fs from 'fs'; 

const filePath: string = './src/data/estudantes.txt';

let estudantes: Estudante[] = [];


export function addEstudante(nome: string, email: string, idade: number, cidades: { nome: string, estado: Estados }): void {

    const cidade: Cidade = {
        nome: cidades.nome,
        estado: cidades.estado
    }

    const estudante: Estudante = {
        id: uuid(),
        nome: nome,
        email: email,
        idade: idade,
        cidade: cidade
    }

    estudantes.push(estudante);

    try{
        fs.writeFileSync(filePath, JSON.stringify(estudantes));
        console.log("Estudante adicionado com sucesso!");
    }
    catch(err){
        console.error(`${(err as Error).message}`);
    }

}

export function getEstudantes():void{
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        estudantes = JSON.parse(data) as Estudante[];
    }
    catch(err){
        console.error(`${(err as Error).message}`);
    }
}