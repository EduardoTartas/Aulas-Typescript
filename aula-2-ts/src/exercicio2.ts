//EXERCICIO 2
let anoAtual:number = 2024;

function calcularIdade(anoNascimento:number) {
    let idade:number = anoAtual - anoNascimento; 
    return idade;
}
console.log(`Fulano tem ${calcularIdade(2005)} anos de idade`)