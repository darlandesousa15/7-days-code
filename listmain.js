let produtos = [];
let categoriaProdutos = [];


alert("Nesta página você irá criar sua lista de compras, onde iremos organizala e poupar sua caminhada e tempo.");

function adicionandoLista (){
    const adicionarLista = prompt("Deseja adiocar mais algum produto a sua lista ? Responda 'sim ou não'");
    while (adicionarLista == "sim" || adicionarLista == "s" ) {
        criandoLista();
        if (adicionarLista == "não" || adicionarLista == "n" || adicionarLista == "nao" || adicionarLista == "ñ");
    break;
    }
}
adicionandoLista();
document.write(produtos + categoriaProdutos);

function criandoLista () {
    produtos.push(prompt("Qual produto será adicionado?"));
    categoriaProdutos.push(prompt("Qual categoria este produto se encaixa ? 'fruta' 'legumes' 'laticinio' 'congelado' 'higiene' 'limpeza'"));
    adicionandoLista();
}

