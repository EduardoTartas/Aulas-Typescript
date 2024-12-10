import * as productService from '../1exercicio/service/productService';

productService.addProduct("Coca-Cola",9 , 100);
productService.addProduct("Bala Halls", 3, 180);
productService.addProduct("Mentos", 5, 42);

productService.removeProduct("1234");

productService.uptdateQuantity("1234", 200);

productService.getTotalValue();