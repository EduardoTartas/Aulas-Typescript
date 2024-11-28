//EXERCICIO 3
function verificarAcesso(ehAdmin:boolean){
    if(ehAdmin){
        return console.log("Acesso concedido. Bem-vindo ao sistema administrativo.")
    }
    else{
        return console.log("Acesso negado. Você não tem permissão para acessar o sistema.")
    }
} 
verificarAcesso(false);