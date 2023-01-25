alert("Jogo de adivinhação, vamos jogar ? Adivinhe um numero de 1 a 7");

let numeroPensado = Math.round((Math.random) * 7);
let chute = parseInt(prompt("Chute um valor"));
let tentativas = 3;

if (chute == numeroPensado){
    alert("Parabéns, você acertou!");
    document.write("<h1>Você acertou !!!<h1><br> O numero penssado foi " + numeroPensado);
}
else {
    alert("Infelizmente você errou! Você terá mais uma chance.")
    for (contador == 0; contador <= 3; contador ++){
        chute;
    }
}



