/*import fs from 'fs';

const filePath: string = './data/estudantes.txt';
let conteudo: string = "";

try{
    conteudo = fs.readFileSync(filePath, 'utf8');
}
catch(err){
    console.error(`${(err as Error).message}`);
}

let linhas: string[] = []; 

if (conteudo){
    linhas = conteudo.split("\n");
    //console.log(linhas[0]);
    //console.log(linhas.length);
    linhas.push('Emilia');
    linhas.push("Teste1");
    linhas.push("Teste2");
    linhas.push("Teste3");
    linhas.push("Teste4");
    //console.log(`Tamahnho do array: ${linhas.length}`);
    //console.log(linhas[5]);
    linhas.forEach((linha, key) => console.log(`${key} - ${linha}`));
}

try{
    fs.writeFileSync(filePath, linhas.join("\n"));
    console.log("Arquivo atualizado com sucesso!");
}
catch(err){
    console.error(`${(err as Error).message}`);
}*/

import * as estudantesService from './services/estudanteService';
import { Estados } from './enums/estado';

estudantesService.addEstudante("Emilia", "123", 2, {nome: "São Paulo", estado: Estados.SP});
estudantesService.addEstudante("Emilia", "123", 2, {nome: "São Paulo", estado: Estados.SP});