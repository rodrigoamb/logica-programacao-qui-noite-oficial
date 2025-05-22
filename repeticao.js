//laços de repetição - for

// console.log("Rodrigo Medeiros");
// console.log("Rodrigo Medeiros");
// console.log("Rodrigo Medeiros");
// console.log("Rodrigo Medeiros");
// console.log("Rodrigo Medeiros");

for (let i = 0; i < 5; i++) {
  console.log("O valor do meu i:", i);
}

console.log("Depois do for");

const nomes = ["Rodrigo", "Medeiros", "Guilherme", "Lucas", "João"];

const quantItens = nomes.length;

console.log("numero de itens", quantItens);

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// crie um bloco de código e use o for para repetir esse código 10x

for (let i = 1; i <= 10; i++) {
  console.log("O valor do meu i:", i);
}

// crie um array de frutas e faça um for iterando sobre esse array, printe no console o nome dessas frutas.

const frutas = ["banana", "uva", "morango", "limão"];

for (let i = 0; i < frutas.length; i++) {
  console.log("minha fruta é: ", frutas[i]);
}

// ainda no array de frutas, usando o laço de repetição for, troque morango por melancia

console.log("antes do for:", frutas);

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "morango") {
    frutas[i] = "melancia";
  }
}

console.log("depois do for:", frutas);

// criem o seguinte array de objetos:

const tenis = [
  {
    marca: "Nike",
    modelo: "Air Max",
    cor: "preto",
    tamanho: [42, 43, 44],
    preco: 499.99,
    estoque: 10,
  },
  {
    marca: "Adidas",
    modelo: "Ultraboost",
    cor: "branco",
    tamanho: [40, 41, 42],
    preco: 599.99,
    estoque: 5,
  },
  {
    marca: "Puma",
    modelo: "RS-X",
    cor: "azul",
    tamanho: [39, 40, 41],
    preco: 399.99,
    estoque: 8,
  },
  {
    marca: "Reebok",
    modelo: "Classic",
    cor: "cinza",
    tamanho: [38, 39, 40],
    preco: 299.99,
    estoque: 12,
  },
];

// ocorreu uma mudança no estoque no qual o estoque de cada um dos tenis foi reduzido em 1
// e o preço do puma entrou em promoção de 399.99 para 299.99
// e o preço do reebok aumentou de 299.99 para 399.99
// o tamanho do nike foi alterado para [42, 43, 44, 45]

for (let i = 0; i < tenis.length; i++) {
  tenis[i].estoque = tenis[i].estoque - 1;

  if (tenis[i].marca === "Puma") {
    tenis[i].preco = 299.99;
  }

  if (tenis[i].marca === "Rebook") {
    tenis[i].preco = 399.99;
  }

  if (tenis[i].marca === "Nike") {
    tenis[i].tamanho[tenis[i].tamanho.length] = 45;
  }
}

console.log(tenis);

// para adicionar um item no final do array

const nomesList = ["Rodrigo", "Lucas", "Bruno"];

nomesList[nomesList.length] = "Nacelio";

console.log(nomesList);

console.log(nomesList[nomesList.length - 1]);
