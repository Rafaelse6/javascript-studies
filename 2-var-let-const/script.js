//Sempre dar prioridade ao const, somente se precisar trocar
//o valor da variável usar o let, nunca usar o VAR

const x = 10;

if( x > 0){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("Imprimindo dentro do IF:");
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("Imprimindo fora do IF:");
console.log(a);
//console.log(b);
//console.log(c);

console.log("Imprimindo resultado do for:");

for(let i = 0; i< 5; i++){
    console.log(i)
}