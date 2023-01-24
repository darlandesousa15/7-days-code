


function alertando() {
  alert("Selecione 1 Para a primeira opção e 2 para a segunda opção");
  document.write("<h1>Selecione 1 Para a primeira opção e 2 para a segunda opção</h1>");
}

alertando();

const perguntaFront = prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End ?");

function frontBack () {
  perguntaFront;
}

frontBack();

function frontIfElse (){
  if (perguntaFront === "1" || perguntaFront == "front" ){
    alert("deu certo");
  } else {
    alert("VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA");
    document.write("<b><h1>***RECOMESSE***<br>VALOR INFORMADO INCORRETO - INFORME 1 PARA A PRIMEIRA OPÇÃO E 2 PARA A SEGUNDA</h1></b>")
  }
  }
frontIfElse();
