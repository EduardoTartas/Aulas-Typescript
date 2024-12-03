const exchangeRates = {
    USD: 5.25,
    EUR: 5.9,
    BRL: 1
}

enum Currency {
    USD = "USD",
    EUR = "EUR",
    BRL = "BRL"
}

function convertCurrency(amount: number, from: Currency, to: Currency):number{
    if (from == to) {
        console.log("impossível converter");
        return amount;
    }
    else{
        const convertedAmount = amount * exchangeRates[from] / exchangeRates[to];
        return parseFloat(convertedAmount.toFixed(2));
    }
}

console.log(convertCurrency(100, Currency.BRL, Currency.USD)); 
console.log(convertCurrency(50, Currency.EUR, Currency.BRL)); 
console.log(convertCurrency(200, Currency.USD, Currency.EUR));