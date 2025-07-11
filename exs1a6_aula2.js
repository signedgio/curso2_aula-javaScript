// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log("Olá, mundo!");
}
olaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome (nome){
    console.log("Olá, " + nome);
}
olaNome("Alice");

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
    return numero*2;
}

let resultado = dobroNumero(5);
console.log(resultado);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
 function mediaNumeros (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
 }

 let media = mediaNumeros(6, 7, 9);
console.log(media);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaior (num1, num2) {
if (num1 > num2) {
    return num1;
} else {
    return num2;
}
}

let maior = exibirMaior(1, 9);
console.log("O maior número é " + maior);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function exibirAoQuadrado(numero) {
    return numero*numero
}
let multiplicacao = exibirAoQuadrado(4);
console.log("O resultado da multiplicação de 4 por ele mesmo é de " + multiplicacao);
