// estruturas de array e objeto

//array

let marcaCarros = ["Ferrari", "Fiat", "Toyota"];

console.log("tipo do meu array:", typeof marcaCarros);

let tamanhoDoMeuArray = marcaCarros.length;

let listaVariada = [100, "Cabeçote", "banana", true];

console.log(marcaCarros);
console.log(listaVariada);

let meuCarro = marcaCarros[2]; // acessando o dado do array pelo indice

console.log(meuCarro);

//trocar/substituir o dado no array
marcaCarros[1] = "BMW";

console.log(marcaCarros);

//adicionando item no array

marcaCarros[3] = "Dodge";

console.log(marcaCarros);

// objetos

const pessoa = {
  nome: "Rodrigo",
  idade: 35,
  profissao: [
    "Programador",
    "professor",
    "gerente",
    "tech leader",
    "pai do chris",
  ],
};

const minhaProfissao = pessoa.profissao[4];

console.log(minhaProfissao);

//adicionar outra propriedade

pessoa.altura = 1.87;

console.log(pessoa);

pessoa.idade = pessoa.idade + 2;

//deletar uma propriedade

delete pessoa.idade;

console.log(pessoa);
