interface User{
    username:string,
    email:string,
    password:string,
    idade:number
}

const user1:User = {
    username:"Eduardo",
    email:"eduardo@email.com",
    password:"Eduardo@pasword123",
    idade:19
}

const user2:User = {
    username:"Julio",
    email:"julio@email.com",
    password:"Julio@pasword123",
    idade:17
}

const user3:User = {
    username:"ana",
    email:"Clara#email.com",
    password:"Clara@pasword123",
    idade:19
}

function UserValidate(user:User): string[]{
    let errors:string[] = [];
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

    if(user.username.length < 5){
        errors.push("Nome de usuario inválido");
    }
    if(!emailRegex.test(user.email)){
        errors.push("Email inválido");
    }
    if(!passwordRegex.test(user.password)){
        errors.push("Senha inválido");
    }
    if(user.idade < 18){
        errors.push("Usuario não tem a idade mínima permitida"); 
    }

    return errors;

}

console.log(UserValidate(user3));