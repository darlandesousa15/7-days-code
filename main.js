let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'
const nome = prompt("Qual o seu nome ?");
const idade = prompt("Quantos anos você tem?");
const programacao = prompt("Qua linguagem de programação você esta aprendendo ?");
const estudando = prompt("Você gosta de estudar " + programacao + "? Responda com o número 1 para sim ou 2 para não.");
/*
const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);
*/

function escreveTela(){
  document.write("Olá " + nome + ",você tem " + idade + " anos e já está aprendendo " + programacao);
}
escreveTela();

function linguagem(){
  if(estudando == "1"){
alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }
}
linguagem();

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}