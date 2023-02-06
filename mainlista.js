const lista = [];
const fruta = [];
const higiente = [];
const limpeza = [];
const congelado = [];


alert("Crie uma lista automatica poupando traqbalho de organização")

function testando (){
	const lista = prompt("Qual produto será adicionado a lista ?")
	alert("Categorias disponiveis: - fruta - limpeza - higiene - congelado")
	const categoria = prompt("Qual categoria pertencia esse produto ?")
	if (categoria === "fruta")
		categoria.push(fruta)
}

testando();