// condicionais = O meu programa pode tomar diferentes caminhos

// if/else

// if (condicao) {
//       //se a condicao for verdadeira, vai executar o código que estiver no if
// } else {
//       //se a condicao for false, vai executar o bloco de codigo else
// };

let idade = 20;
let myStatus;

if (idade >= 18) {
  myStatus = "Maior de idade";
} else {
  myStatus = "Menor de idade";
}

//operador ternario

myStatus = idade >= 18 ? "Maior de idade" : "Menor de idade";

//questao 01

function avaliarNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5 && nota <= 6.9) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

avaliarNota(8);
avaliarNota(6.3);
avaliarNota(2);
