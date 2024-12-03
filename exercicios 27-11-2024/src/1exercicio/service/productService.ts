import chalk from 'chalk';
import { v4 as uuid } from "uuid";
import { Product } from './../models/product';

const products:Product[] = [
    {id:"1234", name:"teste", price:0, quantity:10}
];

export function addProduct(name:string, price:number, quantity:number ):void{
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

export function removeProduct(id:string):void{
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

export function uptdateQuantity(id:string, quantity:number):void{
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

export function getTotalValue():number{
    let totalValue:number = 0;
    products.forEach(product =>{
        console.log(`O valor total do estoque de ${chalk.bold(product.name)} é: R$:${chalk.bold(product.quantity * product.price)}`);
        totalValue += product.price * product.quantity; 
    });
    console.log(`O valor total do estoque é de: R$:${chalk.bold(totalValue)}`);
    return totalValue;
}
