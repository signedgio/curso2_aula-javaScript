let titulo = documento.querySelector("h1");
titulo.innerHRML = "Hora do desafio.";

function alertaClick() {
    console.log("O botão foi clicado!");
}

function verificarAlerta() {
    alert("Eu amo JS!");
}

function alertaCidade () {
    let cidade = prompt("Qual é a cidade que você mora?");
    alert("Estive em " + cidade + " E pensei em você.");
}

function verificarSoma () {
    let numero1 = prompt("Escolha um número");
    let numero2 = prompt("Escolha outro número");
    let soma = numero1 + numero2;
    alert("O valor da sua soma é de " + soma);
}
