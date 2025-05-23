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

const calculadora = {
  marca: "Casio",

  somar(num1, num2) {
    return {
      ret1: "Alguma coisa",
      ret2: num1 + num2,
      ret3: num1 / num2,
    };
  },

  subtrair(num1, num2) {
    return num1 - num2;
  },

  multiplicar(num1, num2) {
    return num1 * num2;
  },

  dividir(num1, num2) {
    return num1 / num2;
  },
};

const resultSoma = calculadora.somar(20, 10);

console.log("O resuldado da soma é: ", resultSoma);

const resultSubtrair = calculadora.subtrair(50, 25);

console.log("O resultado da subtração é: ", resultSubtrair);

const resultMultiplicar = calculadora.multiplicar(2, 30);

console.log("O resultado da multiplicação é: ", resultMultiplicar);

const resultDividir = calculadora.dividir(10, 2);

console.log("O resultado da divisão é: ", resultDividir);

const puxandoMeuDado = calculadora.somar(300, 200);

puxandoMeuDado.ret1;
