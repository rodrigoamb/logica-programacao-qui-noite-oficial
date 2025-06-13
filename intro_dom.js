const meuContainer = document.querySelector("#container"); //destino da mensagem
const inputNome = document.querySelector("#nome"); //selecao do input

const meuBotao = document.querySelector("#btn");

console.log(meuContainer);
console.log(inputNome);
console.log(meuBotao);

function mostrarMensagem() {
  const nomeDigitado = inputNome.value;

  const mensagem = `Olá meu nome é ${nomeDigitado}`;

  meuContainer.textContent = mensagem;
}
