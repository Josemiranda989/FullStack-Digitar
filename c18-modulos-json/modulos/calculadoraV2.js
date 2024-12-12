let calculadora = {
  sumar: function (num1, num2) {
    return num1 + num2;
  },
  restar: function (num1, num2) {
    return num1 - num2;
  },
  multiplicar: (num1, num2) => num1 * num2,
  dividir: (num1, num2) => num1 / num2,
};

module.exports = calculadora;
