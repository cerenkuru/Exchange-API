class Currency {
    constructor(firstCurrency,secondCurrency){


        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = 'https://v6.exchangerate-api.com/v6/9a8c2c4d30c85d22b2552fd6/latest/';

        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject) => {
        fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.conversion_rates[this.secondCurrency];
            const amount2 = Number(this.amount);

            let total = parity*amount2;
            

            resolve(total);
        })
        .catch(err => reject(err));


        });

    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;

    }
    
}