console.log("\nTrabalhando com loops");

const listaDeDestinos = new Array( // constante, mas aceita a adição de elementos
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || (estaAcompanhado);

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i < 3; i++) {
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}