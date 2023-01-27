let produtos = [];
let categoriaProdutos = [];
let fruta = [];
let legumes = [];
let laticinio = [];
let congelado = [];
let higiene = [];
let limpeza = [];


alert("Nesta página você irá criar sua lista de compras, onde iremos organizala e poupar sua caminhada e tempo.");

function adicionandoLista (){
    const adicionarLista = prompt("Deseja adiocar mais algum produto a sua lista ? Responda 'sim ou não'");
    while (adicionarLista === "sim" || adicionarLista === "s" ) {
        criandoLista();
        if (adicionarLista === "não" || adicionarLista === "n" || adicionarLista === "nao" || adicionarLista === "ñ");
    break;
    }
}

function criandoLista () {
    produtos.push(prompt("Qual produto será adicionado?"));
    categoriaProdutos.push(prompt("Qual categoria este produto se encaixa ? 'fruta' 'legumes' 'laticinio' 'congelado' 'higiene' 'limpeza'"));
    if (categoriaProdutos == "fruta"){
        fruta.push(produtos);
    } else if (categoriaProdutos == "legumes"){
        legumes.push(produtos);
    }else if (categoriaProdutos == "laticinio"){
        laticinio.push(produtos);
    }else if (categoriaProdutos == "congelado"){
        congelado.push(produtos);
    }else if (categoriaProdutos == "higiene"){
        higiene.push(produtos);
    }else if (categoriaProdutos == "limpeza"){
        limpeza.push(produtos);
    }
    
}
adicionandoLista();

alert(`Lista de Compras:\n Frutas: ${fruta} \n Legumes: ${legumes} \n Laticinio: ${laticinio} \n Congelado: ${congelado} \n Limpeza: ${limpeza} `);
