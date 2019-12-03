exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    return ((num).toString(2)).padStart(8,0);
  },

  multiply: function(a, b) {
    return ((a*10) * (b*10)) / 100;
  }
};
