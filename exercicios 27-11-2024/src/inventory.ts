import chalk from 'chalk';
import { v4 as uuid } from "uuid";

interface Product {
    id:string,
    name:string,
    price:number,
    quantity:number
}

const products:Product[] = [
    {id:"1234", name:"teste", price:0, quantity:10}
];

function addProduct(name:string, price:number, quantity:number ):void{
    if(name.length <= 0){
        console.log(`${chalk.bold('Produto inválido')}`)
    }
    else{
        let newProduct:Product = {
            id:uuid(),
            name:name,
            price:price,
            quantity:quantity
           }
           products.push(newProduct);
           console.log(`${chalk.bold(name)} adicionado com sucesso a lista de produtos!`)
    }  
}

addProduct("Coca-Cola",9 , 100);
addProduct("Bala Halls", 3, 180);
addProduct("Mentos", 5, 42);

function removeProduct(id:string):void{
    const filteredProducts:Product[] = products.filter(products => products.id == id);
    let indexProduct:number = products.findIndex(product => product.id == id);
    
    if(filteredProducts.length <= 0){
        console.log(`${chalk.bold('Produto não encontrado')}`);
    }
    else{
        filteredProducts.forEach(product =>{
            console.log(`${chalk.bold(product.name)} removido com sucesso a lista de produtos!`);
            products.splice(indexProduct,1);
        })
    }
}

//removeProduct("1234");

function uptdateQuantity(id:string, quantity:number):void{
    const filteredProducts:Product[] = products.filter(products => products.id == id);

    if(filteredProducts.length <= 0){
        console.log(`${chalk.bold('Produto não encontrado')}`);
    }
    else{
    filteredProducts.forEach(product =>{
        product.quantity = quantity;
        console.log(`Quantidade do produto ${chalk.bold(product.name)} autualizada para ${chalk.bold(product.quantity)}!`);
    });
    }
}

uptdateQuantity("1234", 200);

function getTotalValue():number{
    let totalValue:number = 0;
    products.forEach(product =>{
        console.log(`O valor total do estoque de ${chalk.bold(product.name)} é: R$:${chalk.bold(product.quantity * product.price)}`);
        totalValue += product.price * product.quantity; 
    });
    console.log(`O valor total do estoque é de: R$:${chalk.bold(totalValue)}`);
    return totalValue;
}

getTotalValue();