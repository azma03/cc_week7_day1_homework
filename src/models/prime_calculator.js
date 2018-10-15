const PubSub = require('../helpers/pub_sub.js');

const PrimeCalculator = function(){ //empty constructor

}

PrimeCalculator.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtednumber = event.detail;
    const result = this.prime_calculator(inputtednumber);
    // console.log("Prime Result?", result);

    // debugger;

    PubSub.publish('PrimeCalculator:result-calculated', result);
  } )
};

PrimeCalculator.prototype.prime_calculator = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeCalculator;
