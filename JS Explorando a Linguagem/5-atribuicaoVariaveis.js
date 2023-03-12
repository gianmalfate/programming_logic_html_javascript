console.log("Trabalhando com atribuição de variáveis");

// const idade = 19;
// variavel que pode ser modificada "let", nao "const"
let primeiroNome = "Giancarlo";
const sobrenome = "Malfate";

console.log(primeiroNome + sobrenome);
console.log(primeiroNome, sobrenome);
// console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(primeiroNome);
// nome = 2; -- variavel
// nomeCompleto = 2; -- erro -- constante
console.log(nomeCompleto);

// var que varia
let contador = 0;
contador = contador + 1;

let idade; // declarando variável
idade = 19; // atribuindo valor
idade = idade + 1;
console.log(idade);