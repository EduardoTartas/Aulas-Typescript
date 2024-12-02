"use strict";
//EXERCICIO 2
let anoAtual = 2024;
function calcularIdade(anoNascimento) {
    let idade = anoAtual - anoNascimento;
    return idade;
}
console.log(`Fulano tem ${calcularIdade(2005)} anos de idade`);
