const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const operacao = document.querySelector("#operacoes");
const botao = document.querySelector("#btnCalcular");
const espacoResultado = document.querySelector("#resultado");

console.log(operacao);

//revisem conceito escopo de bloco e escopo global

function calcular() {
  //primeiro eu tenho que pegar o valor do input1 e input2 e salvar em uma variavel
  const valor1 = Number(inputNum1.value);
  const valor2 = Number(inputNum2.value);

  let resultado;

  if (operacao.value === "+") {
    resultado = valor1 + valor2;
  }

  if (operacao.value === "-") {
    resultado = valor1 - valor2;
  }

  if (operacao.value === "*") {
    resultado = valor1 * valor2;
  }

  if (operacao.value === "/") {
    resultado = valor1 / valor2;
  }

  espacoResultado.textContent = `O Resultado da Operação é: ${resultado}`;
}
