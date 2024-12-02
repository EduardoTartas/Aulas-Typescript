interface Aluno {
    nome:string,
    idade:number,
    matriculado:boolean,
    pcd?:boolean

    endereco: { 
        logradouro:string,
        numero:string,
        bairro:string,
        cidade:string,
        estado:string
    }
    disciplinas:string[]
}

let novoAluno = {
    nome:"Eduardo",
    idade: 18,
    matriculado:true,
    
    endereco: {
        logradouro:"Rua Tembés",
        numero:"2245",
        bairro:"Alto dos parecis",
        cidade:"Vilhena",
        estado:"Rôndonia"
    },

    disciplinas:["Português", "Matemática", "Banco de Dados", "Fábrica de Software"]
}

console.log(novoAluno);
console.log(novoAluno.nome);
console.log(novoAluno.endereco.logradouro);
console.log(novoAluno.disciplinas[2]);
novoAluno.matriculado? console.log("Matriculado"):console.log("Não Matriculado");

console.log("\n--------------\n")
//----------

interface Produto{
    nome:string,
    preco:number,
    categorias:string[],
    disponivel:boolean,
    promocao?:boolean
}

let novoProduto = {
    nome:"Coca-Cola",
    preco:12.50 ,
    categorias:["Refrigerante", "Bebida"],
    disponivel:true,
    promocao:false
}

console.log(novoProduto.nome)
console.log(novoProduto.preco)
console.log(novoProduto.categorias)
console.log(novoProduto.promocao)
