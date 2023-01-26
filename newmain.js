alert("Jogo de adivinhação, vamos jogar ? Adivinhe um numero de 1 a 10");

let numeroPensado = Math.round(Math.random() * 10);
let chute = parseInt(prompt("Chute um valor"));
let tentativas = 3;

function fazendoChute (){
if (chute == numeroPensado){
    alert("Parabéns, você acertou!");
    document.write("<h1>Você acertou !!!<h1><br> O numero penssado foi " + numeroPensado);
} else { while (tentativas >= 1) {
    alert("Infelizmente você errou! Você terá mais " + tentativas + " chance.");
    tentativas --;
    let chute = parseInt(prompt("Chute um valor"));
    if (chute == numeroPensado){
        document.write("<h1>Você acertou !!!<h1><br> O numero penssado foi " + numeroPensado);
        break
            }
        }
    }
}
fazendoChute();

function comparaChute (){
    if (tentativas == "0") {
        document.write("<h2>Você excedeu as tentativas! O número penssado foi " + numeroPensado + "<br> Tente novamente atualizando a página e boa sorte! :D </h2>");
    }
}
comparaChute(tentativas);