// Revisao - tipos e variáveis

let meuNome = "Rodrigo"; //let eu posso trocar o valor
const idade = 45; // const é constante, nao troca valor
console.log(meuNome);

//reatribuir um novo dado para a variável

meuNome = "Lucas";
// idade = 30; gera um erro pois é const

console.log(meuNome);

//tipos primitivos

let frase = "Isso é uma string"; // tipo texto/string sempre está entre aspas

let frase2 = 'Isso também é uma string'; // também posso usar aspas simples

let frase3 = `Olá 
meu 
nome 
é 
${meuNome}`; // também posso usar crase e concatenar com variáveis. Posso quebrar linha também

console.log(frase3);

// tipos numbers

let alturaPredio = 20; //number
let minhaAltura = 1.87; //number

//tipo boolean (true/false)

let estaAtivo = true;
let estaSolteiro = false;

//tipo undefined

let predio;
let nomeDePessoa;

console.log(predio);

// tipo null

let numero = null;
