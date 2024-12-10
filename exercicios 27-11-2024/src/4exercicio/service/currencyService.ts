import { Currency } from '../enums/currency';

export const exchangeRates = {
    USD: 5.25,
    EUR: 5.9,
    BRL: 1
}

export function convertCurrency(amount: number, from: Currency, to: Currency):number{
    if (from == to) {
        console.log("impossível converter");
        return amount;
    }
    else{
        const convertedAmount = amount * exchangeRates[from] / exchangeRates[to];
        return parseFloat(convertedAmount.toFixed(2));
    }
}