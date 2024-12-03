import * as currencyService from '../4exercicio/service/currencyService';
import { Currency } from '../4exercicio/enums/currency';

console.log(currencyService.convertCurrency(100, Currency.BRL, Currency.USD)); 
console.log(currencyService.convertCurrency(50, Currency.EUR, Currency.BRL)); 
console.log(currencyService.convertCurrency(200, Currency.USD, Currency.EUR));