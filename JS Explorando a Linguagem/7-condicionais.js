console.log("Trabalhando com condicionais \n\n");

const listaDeDestinos = new Array( // constante, mas aceita a adição de elementos
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);
const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhado) { // a pessoa é menor de idade
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade, por isso não será possível concluir a venda");
// }

if ((idadeComprador >= 18) || (estaAcompanhado)) {
    console.log("Passagem comprada \n\n");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de idade, por isso não será possível concluir a compra \n\n");
}

console.log("Embarque:");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!");
} else {
    console.log("Não poderá embarcar");
}

console.log(listaDeDestinos);

// operadores
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);