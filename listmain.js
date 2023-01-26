let produtos = [];
let categoriaProdutos = [];


alert("Nesta página você irá criar sua lista de compras, onde iremos organizala e poupar sua caminhada e tempo.");

function adicionandoLista(){
    const adiconarlista = prompt("Deseja adiocar mais algum produto a sua lista ? Responda 'sim ou não'");
    if (adiconarlista == "sim") {
        criandoLista();
    } else {
        document.write("<h1>Sua lista</h1><br>" + produtos " -- "+ categoriaProdutos);
    }
}
adicionandoLista();

function criandoLista () {
    produtos.push(prompt("Qual produto será adicionado?"));
    categoriaProdutos.push(prompt("Qual categoria este produto se encaixa ? 'fruta' 'legumes' 'laticinio' 'congelado' 'higiene' 'limpeza'"));
    /*if (categoriaProdutos == "fruta" || adicionarCategoria == "legumes" || adicionarCategoria == "laticinio" || adicionarCategoria == "congelado" || adicionarCategoria == "higiene" || adicionarCategoria == "limpeza" || ) {

    }*/
    adicionandoLista();
    console.log(produtos, categoriaProdutos)
}

