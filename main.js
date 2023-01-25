

function alertando() {
  alert("Selecione 1 Para a primeira opção e 2 para a segunda opção ou escreva sua resposta sem erros ortográficos");
  document.write("<h1>Selecione 1 Para a primeira opção e 2 para a segunda opção.<br>Ou escreva sua resposta sem erros ortográficos</h1>");
}
alertando();

const perguntaFront = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End ?");

function frontBack () {
  perguntaFront;
}

frontBack();
const teste = prompt("Caso esteja na área de Front-End, você quer aprender React ou aprender Vue. Caso esteja na área de Back-End, irá preferir aprender C# ou aprender Java");
function frontIfElse (){
  if (perguntaFront === "1" || perguntaFront == "front" || perguntaFront == "front-end"  || perguntaFront === "2" || perguntaFront === "back" || perguntaFront == "back-end" ){
    teste;
  } else {
    alert("VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA");
    document.write("<b><h1>***RECOMESSE***<br>VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA</h1></b>")
    }
  }
frontIfElse();

function determinandoEscolhas (){
  if (teste == "react" || teste == "vue" || teste === "1" || teste === "2" || teste === "3" || teste === "4" || teste == "back-end" || teste == "java" || teste == "c" || teste == "c#" ){
    prompt('Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?')
  } else {
    alert("VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA");
    contador = 2;
  }
}
determinandoEscolhas();

for(let contador = 0; contador <= 8; contador ++){
  const questionandoTecnologias = prompt("Possui outras tecnologias de interesse ? Caso não possua digiter 'sair'");
  if (questionandoTecnologias == "sair" || contador == "10"){
    alert("Parabéns, todas respondidas com sucesso!!!");
    contador == "8";
    break;
  } 
}
document.write("<br>SEUS DADOS FORAM GRAVADOS, OBRIGADO POR PARTICIPAR<br><h2>***PARABÉNS***</h2>");

