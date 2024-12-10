import * as productService from './service/productService';

productService.applyDiscount(productService.products, 15);
productService.filterByCategory(productService.products, 'eletrônico');

