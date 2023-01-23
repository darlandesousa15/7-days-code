const controle = document.querySelectorAll("[data-front]");

controle.forEach( (elemento) => {elemento.addEventListener("click", (evento) => 
proximaMenssagem (evento.target.dataset.controle, evento.target.parentNode))
})


function proximaMenssagem (igual, controle){
  
  if ( igual === "front" ) {
    alert("deu certo")
    
  } else {
    alert("deu errado")
  }
}
