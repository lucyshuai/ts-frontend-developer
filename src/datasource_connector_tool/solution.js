// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

class Datasource {
    constructor() {
        this.http = new XMLHttpRequest();
    }
    getPrices() {
        return new Promise((resolve) => {
            this.http.open('GET', 'https://pastebin.com/raw/KCJm3Kzb', true);
            this.http.onload = () => {
                const prices = [];
                const response = this.http.response;
                response.data.prices.forEach(price => prices.push(new Price(price)))
                resolve(prices);
            }
            this.http.send();
        })
    }
}

class Price {
    constructor(price) {
        this.buy = price.buy;
        this.sell = price.sell;
        this.id = price.id;
        this.pair = price.pair;
        this.timestamp = price.timestamp;
    }
    mid() {
        return (this.buy + this.sell) / 2;
    }
    quote() {
        return this.pair.slice(3, 6);
    }
}