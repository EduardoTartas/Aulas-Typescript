//EXERCICIO 5

enum Prioridade{
    Baixa,
    Media,
    Alta
 }

 function ordem(prd:Prioridade){
    switch(prd){
        case Prioridade.Baixa:
            console.log("Essa tarefa pode ser feita depois.")
            break;
        case Prioridade.Media:
            console.log("Essa tarefa deve ser feita em breve.")
            break;
        case Prioridade.Alta:
            console.log( "Essa tarefa é urgente!")
            break;
    }
 }
 ordem(Prioridade.Media);