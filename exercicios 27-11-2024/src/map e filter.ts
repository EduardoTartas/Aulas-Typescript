import chalk from 'chalk';

interface Product {
    id:string,
    name:string,
    price:number,
    category:string
}


let products:Product[] = [
    {id:"01", name:"Arroz",       price:7,    category:"grão"},
    {id:"02", name:"Feijão",      price:9,    category:"grão"},
    {id:"03", name:"Óleo",        price:10,   category:"alimento"},
    {id:"04", name:"Bife",        price:26,   category:"carne"},
    {id:"05", name:"Frango",      price:14,   category:"carne"},
    {id:"06", name:"Pato",        price:32,   category:"carne"},
    {id:"07", name:"Sabão",       price:3,    category:"limpeza"},
    {id:"08", name:"Celular",     price:2400, category:"limpeza"},
    {id:"09", name:"Computador",  price:4000, category:"eletrônico"},
    {id:"10", name:"Monitor",     price:1200, category:"eletrônico"},
];
products = applyDiscount(products, 15);

function applyDiscount(products:Product[], discount:number):Product[]{
    if(discount<=0){
        console.log(`${chalk.bold(`\nInsira um valor válido\n`)}`);
        return products;
    }
    else{
        const newProducts = products.map(product => ({
            ...product, price: product.price - (product.price * (discount / 100))
        }));

        console.log(`------|${chalk.bold(`Produtos com o novo preço`)}|------`);
        newProducts.forEach(product =>{
            console.log(`\nProduto: ${chalk.bold(product.name)} | preço: R$:${chalk.bold(product.price)} | categoria: ${chalk.bold(product.category)}.`);
        })
        
        return newProducts;
    }
}

function filterByCategory(products:Product[], category:string):Product[]{ 
    const filteredProducts = products.filter((product) => product.category == category);
    if(filteredProducts.length <= 0){
        console.log(`${chalk.bold('Nenhum produto encontrado com essa categoria!')}`)
    }
    else{
        console.log(`\n------|${chalk.bold(`Produtos filtrados por categoria`)}|------`);
        filteredProducts.forEach(product =>{
            console.log(`\nProduto: ${chalk.bold(product.name)} | preço: R$:${chalk.bold(product.price)} | categoria: ${chalk.bold(product.category)}.`);
        }); 
        
    }
    
    return filteredProducts;

}

applyDiscount(products, 15)

filterByCategory(products, "eletrônico");

