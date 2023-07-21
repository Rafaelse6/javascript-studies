function soma1(num1, num2) {
    return num1 + num2;
}

const soma2 = function (num1, num2) {
    return num1 + num2;
}

const soma3 = (num1, num2) => {
    return num1 + num2;
}

const soma4 = (num1, num2) => num1 + num2

const dobro1 = function (num) {
    return num * 2;

}

const dobro2 = num => num * 2;

// Função que não tem retorno definid, por padrão ela retorna underfined

function mostrarPreco(preco) {
    console.log("PRECO = " + preco);
}

//Variaveis definiidas dentro do escopo da funcao nao vazam escopo para fora

function areaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
}

// Functon hoisting: funções no Js são movidas para "cima" pelo motor do JS

teste(10);

function teste(x) {
    console.log("Teste = " + x);
}

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);
