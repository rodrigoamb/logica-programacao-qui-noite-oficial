const pessoa1 = {
  nome: "Nacelio",
  sobrenome: "Lima",
  profissao: "programador",
  cargo: "Senior",
  idade: 18,
  salario: 30000,

  falar() {
    console.log(`Olá eu sou o ${this.nome}`);
  },
};

pessoa1.falar();

class Pessoa {
  constructor(nome, sobrenome, profissao, cargo, idade, salario) {
    (this.nome = nome),
      (this.sobrenome = sobrenome),
      (this.profissao = profissao),
      (this.cargo = cargo),
      (this.idade = idade),
      (this.salario = salario);
  }

  falar() {
    console.log(`Olá eu sou o ${this.nome}`);
  }
}

const pessoa2 = new Pessoa(
  "Maria",
  "Sampaio",
  "Programadora",
  "junior",
  20,
  8000
);

console.log(pessoa2);

// const nomePessoa = "Rodrigo Medeiros";
// const idade = 35;

// const apresentacao = `Oi eu me chamo ${nomePessoa} e tenho ${idade} anos`;

// meuContainer.textContent = apresentacao;
// meuContainer.style.color = "red";
// meuContainer.style.backgroundColor = "black";
