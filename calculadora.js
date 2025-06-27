const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

function calcular(operacao) {
  let resultadoDaOperacao;

  const num1Valor = Number(inputNum1.value);
  const num2Valor = Number(inputNum2.value);

  if (operacao === "somar") {
    resultadoDaOperacao = num1Valor + num2Valor;
  }

  if (operacao === "subtrair") {
    resultadoDaOperacao = num1Valor - num2Valor;
  }

  if (operacao === "multiplicar") {
    resultadoDaOperacao = num1Valor * num2Valor;
  }

  if (operacao === "dividir") {
    resultadoDaOperacao = num1Valor / num2Valor;
  }

  resultado.textContent = `O resultado da operação ${operacao} é: ${resultadoDaOperacao}`;
}
