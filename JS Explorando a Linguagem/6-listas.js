console.log("Trabalhando com listas");

// maneira ineficiente
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

// let new = 2; -- erro, palavra reservada da linguagem

// maneira eficiente -- lista
const listaDeDestinos = new Array( // constante, mas aceita a adição de elementos
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    // "Curitiba"
);

listaDeDestinos.push("Curitiba"); // adicionando um item na lista
// listaDeDestinos = 2; // erro, não é permitiso mudar a variável
console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[0], listaDeDestinos[1]);