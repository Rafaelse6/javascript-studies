function dizerOla() {
    return console.log("Olá");
}

//setTimeout(dizerOla, 2000);

function dizerBomDia(nome) {
    console.log("Bom dia " + nome)
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("Joao");
        setTimeout(() => {
            dizerBomDia("Ana");
        }, 2000);
    }, 2000);
}, 2000);

console.log("A");
console.log("B");