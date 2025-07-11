// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro. IMC = peso / (altura x altura).

function calculoIMC(peso, altura) {
    return peso / (altura*altura);
}

let total = calculoIMC(55, 175/100);
console.log("O IMC é de " + total + " kg/m².");

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
// Para isso, considere a cotação do dólar igual a R$4,80.

function converterEmReais(valorEmDolares) {
    let converter = valorEmDolares * 4.80;
    return converter;
}

let valorEmReais = converterEmReais(100);
console.log("O valor em reais é igual a R$" + valorEmReais + ",00.");

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e 
// largura que serão dadas como parâmetro.

function parametrosAreaEPerimetro(altura, largura) {
    let area = altura*largura;
    let perimetro = 2* (altura + largura);
    console.log("A área da sala é de " + area + " m².");
    console.log("O perímetro da sala é de " + perimetro + " m.");
}

let altura = 5;
let largura = 10;
parametrosAreaEPerimetro(altura, largura);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
// será fornecido como parâmetro. Considere Pi = 3,14.

function parametrosRaioEPi(raio) {
    let area =  3.14 * (raio*raio);
    let perimetro = 2*3.14*raio;
    console.log("A área da sala circular é de " + area + " m².");
    console.log("O perímetro da sala circular é de " + perimetro + " m.");
}
let raio = 5;
parametrosRaioEPi(raio);    

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let inicio = 1;

function tabuadaDeUmNumero(numero) {
    while (inicio <= 10) {
        let tabuada = numero*inicio;
        inicio = inicio + 1;
        console.log(tabuada);
    }
}

let numero = 5;
tabuadaDeUmNumero(numero);
