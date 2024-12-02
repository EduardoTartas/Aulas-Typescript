"use strict";
//EXERCICIO 5
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Baixa"] = 0] = "Baixa";
    Prioridade[Prioridade["Media"] = 1] = "Media";
    Prioridade[Prioridade["Alta"] = 2] = "Alta";
})(Prioridade || (Prioridade = {}));
function ordem(prd) {
    switch (prd) {
        case Prioridade.Baixa:
            console.log("Essa tarefa pode ser feita depois.");
            break;
        case Prioridade.Media:
            console.log("Essa tarefa deve ser feita em breve.");
            break;
        case Prioridade.Alta:
            console.log("Essa tarefa é urgente!");
            break;
    }
}
ordem(Prioridade.Media);
