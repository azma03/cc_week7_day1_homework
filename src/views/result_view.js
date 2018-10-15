const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){ //empty constructor

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeCalculator:result-calculated', (event) => {
    const result = event.detail;
    console.log('result', result);
    this.displayResult(result);
  });

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if(result){
    resultElement.textContent = 'The number is prime';
  }
  else{
      resultElement.textContent = 'The number is not prime';
  }

};

module.exports = ResultView;
