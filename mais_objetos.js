const lapiseira = {
  nome: "lapiseira",
  ponta: 0.7,
  temBorracha: true,
  marca: "Compactor",

  //forma 1 de criar método
  escrever: function () {
    console.log("Estou escrevendo com a minha lapiseira");
  },

  apagar: function () {
    if (this.temBorracha === false) {
      console.log("OPA! Essa lapiseira nao pode apagar, ela nao tem borracha");
    } else {
      console.log(`Estou apagando com minha lapiseira ${this.marca}`);
    }
  },
};

const carro = {
  nome: "carro",
  cor: "Vermelho",
  marca: "Ferrari",
  estaLigado: false,

  //forma 2 de criar metodo
  ligar() {
    this.estaLigado = true;
    console.log(`O carro ${this.marca} esta ligado`);
  },

  desligar() {
    this.estaLigado = false;
    console.log(`O carro ${this.marca} está desligado`);
  },
};

function escrever(lapeiseiraOuCaneta) {
  console.log(
    `Estou escrevendo com ${lapeiseiraOuCaneta.nome} da marca ${lapeiseiraOuCaneta.marca}`
  );
}

escrever(lapiseira);

lapiseira.escrever();

// carro.ligar(carro.marca);

// carro.desligar(carro.marca);

carro.ligar();

console.log(carro);

carro.desligar();

console.log(carro);

lapiseira.apagar();

// Faça um objeto calculadora da marca Casio, que faz as 4 operações (métodos - somar, subtrair, multiplicar e dividir). Depois disso, use a calculadora e suas 4 operações.
