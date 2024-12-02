//EXERCICIO 4
enum Nota{
    A = "Excelente",
    B = "Bom",
    C = "Satisfatório" ,
    D = "Insatisfatório",
    F = "Reprovado"
}

function avaliador(nota:string){
   switch (nota){
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
            console.log(`${Nota.D}`);;
            break; 
        case "F":
            console.log(`${Nota.F}`);;
            break; 
        default:
            console.log("Insira um valor valido!") ;
    }
}
 avaliador("A");