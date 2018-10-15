const PubSub = require('../helpers/pub_sub.js');

const FormView = function() { //empty constructor

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtednumber = event.target.number.value;
    console.log('inputtednumber', inputtednumber);

    PubSub.publish('FormView:number-submitted', inputtednumber);

  } )
};


module.exports = FormView;
