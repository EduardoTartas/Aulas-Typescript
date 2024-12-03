/*let nomes:string[] = ["Maria", "João", "Ana", "Pedro"];

console.log(nomes);
console.log(nomes[3]);

console.log("\n");

nomes.forEach(function (nome){
    console.log(nome);
})

console.log("\n");

nomes.forEach(nome => console.log(nome));

interface Produto {
    descricao:string,
    preco:number
}

let meusProdutos:Produto[] = [
    {descricao: "Sabao em po", preco:15.60},
    {descricao: "MELANCIA", preco:20.60},
    {descricao: "KIT-KAT", preco:2.60}
]

console.log(meusProdutos.length);
console.log("\n");
console.log(meusProdutos[2]);
console.log("\n");
meusProdutos.forEach(produto => console.log(produto.descricao));
console.log("\n");
let meusProdutosFiltrados:Produto[] = meusProdutos.filter(produto => produto.preco >= 5);
console.log(meusProdutosFiltrados);*/

interface Pessoa {
    nome:string,
    idade:number
}

let pessoas:Pessoa[] = [
    {nome: "Maria", idade: 10},
    {nome: "João", idade: 14},
    {nome: "Ana", idade: 16},
    {nome: "Pedro", idade: 20},
    {nome: "Lucas", idade: 23},
    {nome: "Paulo", idade: 58},
    {nome: "Marcos", idade: 61},
    {nome: "Lupas", idade: 87},
];

let pessoasMaiores:Pessoa[] = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.idade <= 60);
let pessoasIdosas:Pessoa[] = pessoas.filter(pessoa => pessoa.idade >= 60);

pessoasIdosas.forEach(pessoa => console.log(pessoa.nome, pessoa.idade));
console.log("\n")
pessoasMaiores.forEach(pessoa => console.log(pessoa.nome, pessoa.idade));


let palavras:string[] =[
    "casa",
    "carro",
    "moto",
    "bicicleta",
    "aviao",
    "navio",
    "caminhão",
    "onibus",
    "trem",
    "metro",
    "barco",
    "submarino"
];

console.log("\n");
palavras.forEach(palavra => console.log(palavra, palavra.length));
