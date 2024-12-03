import {v4 as uuid} from 'uuid';
import chalk from 'chalk';

interface Product {
    id: string;
    name: string;
    price: number;
}
 
let product: Product[] = [
    {id: uuid(), name: 'Coca-Cola', price: 5.00},
    {id: uuid(), name: 'Manga', price: 3.00},
    {id: uuid(), name: 'Bala', price: 0.50}
]

product.forEach(product => {
    console.log(chalk.black(`\nProductID: ${chalk.blue(product.id)}\nNome: ${chalk.red(product.name)}\nPreço: ${chalk.green(product.price)} (R$)`));

});
