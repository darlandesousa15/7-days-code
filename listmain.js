let produtos = [];
let categoriaProdutos = [];
let fruta = [];
let legumes = [];
let laticinio = [];
let congelado = [];
let higiene = [];
let limpeza = [];


alert("Nesta página você irá criar sua lista de compras, onde iremos organizala e poupar sua caminhada e tempo.")

function adicionandoLista (){
    let adicionarLista = prompt("Deseja adicionar mais algum produto a sua lista ? Responda 'sim ou não'");
    while (adicionarLista === "sim" || adicionarLista === "s") {
        let novoProduto = prompt("Qual produto será adicionado?");
        let novaCategoria = prompt("Qual categoria este produto se encaixa ? 'fruta' 'legumes' 'laticinio' 'congelado' 'higiene' 'limpeza'");
        produtos.push(novoProduto);
        categoriaProdutos.push(novaCategoria);
    
        if (novaCategoria === "fruta"){
            fruta.push(novoProduto);
        }else if (categoriaProdutos === "legumes"){
            legumes.push(novoProduto);
        }else if (categoriaProdutos === "laticinio"){
            laticinio.push(novoProduto);
        }else if (categoriaProdutos === "congelado"){
            congelado.push(novoProduto);
        }else if (categoriaProdutos === "higiene"){
            higiene.push(novoProduto);
        }else if (categoriaProdutos === "limpeza"){
            limpeza.push(novoProduto);
        }
    }
    adicionandoLista = prompt("Deseja adicionar mais algum produto a sua lista ? Responda 'sim ou não'");

    document.write("<h1>Frutas: " + fruta + "<br>Legumes: " + legumes + "<br>Laticinio: " + laticinio + "<br>Congelado: " + congelado + "<br>Higiene: " + higiene);