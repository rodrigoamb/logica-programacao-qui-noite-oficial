// métodos de arrays
//sua estrutura é um array e seu tipo é objeto
const frutas = ["laranja", "uva", "melancia"];

//sua estrutura é um objeto e seu tipo é objeto
const pessoa = {
  nome: "Rodrigo",
  profissao: "programador",
};

console.log(typeof frutas);

// Adiciona o elemento no final do array - push()
frutas.push("morango");

console.log(frutas);

// remove o item no final do array - pop()

frutas.pop();

console.log(frutas);

// Adicionando o item no inicio do array - unshift()

frutas.unshift("tamarindo");
console.log(frutas);

// remove o item no inicio do array - shift()

frutas.shift();
console.log(frutas);

// Adiciona, remove ou substitui itens uma posição específica - splice()

const cores = ["roxo", "vermelho", "verde", "azul"];

// cores.splice(2, 0, "branco");

cores.splice(3, 1, "Preto", "rosa", "amarelo", "laranja");

cores.splice(2, 1, "marrom");

console.log(cores);

// retorna uma copia da parte do array sem modificar o array original - slice()

const letras = ["A", "B", "C", "D", "E", "F"];
// primeiro parametro inicia o corte e o item é incluso, o segundo parametro ele finaliza o corte porém não é adicionado
const pedacoDeLetras = letras.slice(2, 5);

console.log(pedacoDeLetras);
console.log(letras);

// métodos avançados de array

// map() - Cria um novo array aplicando mudanças a cada elemento

const numeros = [1, 2, 3, 4, 5, 6];

const numerosDobrados = numeros.map((item) => {
  if (item === 4) {
    return item;
  }

  return item * 2;
});

console.log(numerosDobrados);

const dobrandoPar = numeros.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }

  return item;
});

console.log(dobrandoPar);

// em um array de objetos de carros, temos de propriedades dos carros : modelo, preco, estoque.

const carros = [
  {
    modelo: "Civic",
    preco: 100000,
    estoque: 3,
  },
  {
    modelo: "Corolla",
    preco: 110000,
    estoque: 8,
  },
  {
    modelo: "Kwid",
    preco: 50000,
    estoque: 2,
  },
  {
    modelo: "Hilux",
    preco: 250000,
    estoque: 0,
  },
  {
    modelo: "Onix",
    preco: 100000,
    estoque: 0,
  },
  {
    modelo: "Punto",
    preco: 50000,
    estoque: 0,
  },
  {
    modelo: "Celta",
    preco: 20000,
    estoque: 0,
  },
];

// o caixa da minha loja está em R$50.000,00. Eu vendi 1 civic, vendi um kwid e tive que baixar o preço do corolla para R$90.000,00 para conseguir vender algum. Monte um algorítimo que mostre as movimentações dos meus carros e mostre quanto eu tenho em caixa.

let caixa = 50000;

const novoPatio = carros.map((carro) => {
  if (carro.modelo === "Civic" || carro.modelo === "Kwid") {
    carro.estoque = carro.estoque - 1;
    caixa = caixa + carro.preco;
  }

  if (carro.modelo === "Corolla") {
    carro.preco = 90000;
  }

  return carro;
});

console.log(novoPatio);
console.log(caixa);

// retorna um novo array apenas com os elementos que atendem a uma condição - filter()

const listNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novosNumeros = listNumeros.filter((item) => {
  return item > 4;
});

console.log(novosNumeros);

//----- filtrando carros com estoque zero

const estoqueZero = carros.filter((item) => {
  return item.estoque === 0 && item.modelo === "Celta";
});

console.log(estoqueZero);

// find() Retorna o primeiro elemento que satifaz a uma condição

const encontrado = carros.find((item) => {
  return item.preco === 50000;
});

console.log(encontrado);
