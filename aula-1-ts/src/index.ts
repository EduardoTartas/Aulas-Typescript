let idade: number = 20;
let nome: string = "Maria";
let pagamentoEfetuado: boolean = false;

idade = 12;
nome = "João";
pagamentoEfetuado = true;

//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);
//console.log(`${nome} tem ${idade} anos de idade`);

/*
enum Direcao{
    Norte = "NORTE",
    Sul   = "SUL",
    Leste = "LESTE",
    Oeste = "OESTE"
}
let direcaoTomada: Direcao = Direcao.Norte;
console.log(`Direçao tomada: ${direcaoTomada}`)
*/

enum Cores{
    Azul     = "AZUL",
    Vermelho = "VERMELHO",
    Amarelo  = "AMARELO"
}
 let corEscolhida = Cores.Azul;
 console.log(`Cor EScolhida: ${corEscolhida}`)