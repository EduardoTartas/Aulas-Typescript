/*
let hoje:Date = new Date();
console.log(hoje);

console.log(hoje.toString());
console.log(hoje.toUTCString());

console.log(hoje.getDate());
console.log(hoje.getMonth() + 1);//o mes começa do 0
console.log(hoje.getFullYear());

console.log(`${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`);

let dataNascimento:Date = new Date("2010-11-01");
console.log(dataNascimento);

let dataAtualizacao:Date = new Date("2024-11-05T10:30:00");
console.log(dataAtualizacao);
console.log(dataAtualizacao.toString());
*/

interface Estudante{
    nome:String,
    dataNascimento:Date,
    dataCadastro:Date

    endereco:{
        tipoLogadouro:TipoLogadouro,
        logradouro:String,
        numero:String,
        bairro:String,
        cidade:Cidade,
    }
}

interface Cidade{
    nome:String,
    UF:estados
}

enum TipoLogadouro{
    rua     = "Rua",
    avenida = "Avenida",
    estrada = "Estrada",
    beco    = "Beco"
}

enum estados {
    AC = "Acre",
    AL = "Alagoas",
    AP = "Amapa",
    AM = "Amazonas",
    BA = "Bahia",
    CE = "Ceara",
    DF = "DistritoFederal",
    ES = "EspiritoSanto",
    GO = "Goias",
    MA = "Maranhao",
    MT = "MatoGrosso",
    MS = "MatoGrossoDoSul",
    MG = "MinasGerais",
    PA = "Para",
    PB = "Paraiba",
    PR = "Parana",
    PE = "Pernambuco",
    PI = "Piaui",
    RJ = "RioDeJaneiro",
    RN = "RioGrandeDoNorte",
    RS = "RioGrandeDoSul",
    RO = "Rondonia",
    RR = "Roraima",
    SC = "SantaCatarina",
    SP = "SaoPaulo",
    SE = "Sergipe",
    TO = "Tocantins"
  }

  let vilhena:Cidade = {
    nome:"vilhena",
    UF:estados.RO
  }
  
  
let eduardo:Estudante = {
    nome:"Eduardo Tartas",
    dataNascimento: new Date("2005-11-01"),
    dataCadastro:new Date,

    endereco:{
        tipoLogadouro:TipoLogadouro.rua,
        logradouro:"Rua Tembés",
        numero:"2245",
        bairro:"Alto dos parecis",
        cidade:vilhena
    }
}
let dataNas:string = (`${eduardo.dataNascimento.getDate()}/${eduardo.dataNascimento.getMonth()}/${eduardo.dataNascimento.getFullYear()}`);
console.log(eduardo.dataNascimento)

console.log(`Aluno: ${eduardo.nome}`);
console.log(`Data de nascimento: ${dataNas}`);
console.log(`Estado: ${eduardo.endereco.cidade.UF}`);
console.log(`Cidade: ${eduardo.endereco.cidade.nome}`);
console.log(`Bairro: ${eduardo.endereco.bairro}`);
console.log(`Logradouro: ${eduardo.endereco.logradouro}`);
console.log(`Número: ${eduardo.endereco.numero}`);
console.log(`-----//-----`)
console.log(`Data do cadastro: ${eduardo.dataCadastro}`)
