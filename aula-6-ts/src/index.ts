/*1)Crie um código em TypeScript para um sistema de Gerenciamento de compromissos onde cada compromisso tem uma data e hora, um título, uma descrição, e o status do compromisso (pendente, concluido e cancelado)

2)Crie um array para armazenar os compromissos

3)Crie funções para inserir, listar todos, listar por status, listar um único compromisso, alterar e deletar um compromisso. */

interface Compromisso {
    nome:string,
    dataHora : Date,
    descricao: string,
    status: Status
}

enum Status{
    pendente = "Pendente",
    concluido = "Concluido",
    cancelado = "Cancelado"
}

let compromissosARY:any[] = [];

function inserir(nome:string, dataHora:string, descricao:string, status:Status){
    let compromisso:Compromisso = {
        nome : nome,
        dataHora: new Date(dataHora),
        descricao:descricao,
        status:status
    }
    compromissosARY.push(compromisso)
}

inserir("teste", "2024-11-06T12:00:00", "teste teste teste", Status.pendente);


