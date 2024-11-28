let CPF:string;
CPF =  "01008672270";
let somaNum:number = 0;
let somaNum2:number = 0;
let multiplicador:number = 10;

function Verifica(CPF:string){
    for(let i:number = 0;i<=8;i++){
        somaNum += (parseInt(CPF[i])*multiplicador);
        multiplicador--;
    }
     let PNV:number = 11 -(somaNum %11); // primeiro numero verificador
     
     multiplicador = 11;
     
     for(let i:number = 0;i<=9;i++){
        somaNum2 += (parseInt(CPF[i])*multiplicador);
        multiplicador--;
    }

    let SNV:number = 11 -(somaNum2 %11); // segundo numero verificador

    console.log(PNV)
    console.log(SNV)

    let V1:boolean;
    let V2:boolean;


    if(PNV == parseInt(CPF[9]) || (PNV>=10 && parseInt(CPF[9]) == 0))-{
        return true;
    }
    else if(SNV == parseInt(CPF[10]) || SNV>=10 && parseInt(CPF[10]) != 0){
        return true;
    }
    else return false;

    

}
    

 console.log(Verifica(CPF))
    

