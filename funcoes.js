function soma(num1, num2) {
  return num1 + num2;
}

let resultado = soma(5, 6);

console.log(resultado);

let subtracao = function (num1, num2) {
  return num1 - num2;
};

let novoResultado = subtracao(10, 3);
console.log(novoResultado);

let multiplicacao = (num1, num2) => {
  return num1 * num2;
};

let resultadoMultiplicacao = multiplicacao(2, 3);

console.log(resultadoMultiplicacao);
