"use strict";
let idade = 20;
let nome = "Maria";
let pagamentoEfetuado = false;
idade = 12;
nome = "João";
pagamentoEfetuado = true;
//console.log(`Nome: ${nome}`);
//console.log(`Idade: ${idade}`);
//console.log(`${nome} tem ${idade} anos de idade`);
var Direcao;
(function (Direcao) {
    Direcao["Norte"] = "NORTE";
    Direcao["Sul"] = "SUL";
    Direcao["Leste"] = "LESTE";
    Direcao["Oeste"] = "OESTE";
})(Direcao || (Direcao = {}));
let direcaoTomada = Direcao.Norte;
console.log(`Direçao tomada: ${direcaoTomada}`);
