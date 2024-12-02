"use strict";
//EXERCICIO 4
var Nota;
(function (Nota) {
    Nota["A"] = "Excelente";
    Nota["B"] = "Bom";
    Nota["C"] = "Satisfat\u00F3rio";
    Nota["D"] = "Insatisfat\u00F3rio";
    Nota["F"] = "Reprovado";
})(Nota || (Nota = {}));
function avaliador(nota) {
    switch (nota) {
        case "A":
            console.log(`${Nota.A}`);
            break;
        case "B":
            console.log(`${Nota.B}`);
            break;
        case "C":
            console.log(`${Nota.C}`);
            break;
        case "D":
            console.log(`${Nota.D}`);
            ;
            break;
        case "F":
            console.log(`${Nota.F}`);
            ;
            break;
        default:
            console.log("Insira um valor valido!");
    }
}
avaliador("A");
