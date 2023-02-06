const lista = [];
const categoria = [];
const fruta = [];
const higiente = [];
const limpeza = [];
const congelado = [];


alert("Crie uma lista automatica poupando traqbalho de organização")

function testando (){
	lista.prompt("Qual produto será adicionado a lista ?")
	alert("Categorias disponiveis: - fruta - limpeza - higiene - congelado")
	categoria.prompt("Qual categoria pertencia esse produto ?")
	if (categoria === "fruta")
		categoria.push(fruta)
}

testando();