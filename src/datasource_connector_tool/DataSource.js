class Price {
  constructor(priceData) {
    this.pair = priceData.pair;
    this.timestamp = priceData.timestamp;
    this.buy = priceData.buy;
    this.sell = priceData.sell;
  }

  quote() {
    return this.pair.substring(3);
  }

  buy() {
    return thus.buy / 100;
  }

  sell() {
    return thus.sell / 100;
  }

  mid() {
    return (this.buy + this.sell)/200;
  }
}

class Datasource {
  constructor(pricesEndpoint = 'https://static.ngnrs.io/test/prices') {
    this.pricesEndpoint = pricesEndpoint;
  }

  getPrices() {
    return fetch(this.pricesEndpoint)
      .then(data => data.json())
      .then((response) => {
        return Datasource.wrapPrices(response.data.prices)
      });
  }

  static wrapPrices(prices) {
    return prices.map(priceData => new Price(priceData));
  }
}

function test() {
  const source = new Datasource();
  source.getPrices()
    .then((prices) => {
      prices.forEach(price => {
        console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
    });
  });
}
