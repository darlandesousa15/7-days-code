


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

const contador = 0;

function determinandoEscolhas (){
  if (teste === "1" || teste == "react" || teste == "vue" || teste === "2"|| teste == "back-end" || teste == "c" || teste == "c#" ){
    prompt('tbm deu certo')
  } else {
    alert("VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA");
  }
}
determinandoEscolhas();

