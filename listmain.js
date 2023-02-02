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
    const adicionarLista = prompt("Deseja adicionar mais algum produto a sua lista ? Responda 'sim ou não'");
    while (adicionarLista === "sim" || adicionarLista === "s") {
        produtos = push(prompt("Qual produto será adicionado?"));
        categoriaProdutos = push(prompt("Qual categoria este produto se encaixa ? 'fruta' 'legumes' 'laticinio' 'congelado' 'higiene' 'limpeza'"));
        if (adicionarLista != "sim" && adicionarLista != "s") {
            break;
        }
        
        if (categoriaProdutos === "fruta"){
            fruta.push(produtos[produtos.length - 1]);
        }else if (categoriaProdutos === "legumes"){
            legumes.push(produtos[produtos.length - 1]);
        }else if (categoriaProdutos === "laticinio"){
            laticinio.push(produtos[produtos.length - 1]);
        }else if (categoriaProdutos === "congelado"){
            congelado.push(produtos[produtos.length - 1]);
        }else if (categoriaProdutos === "higiene"){
            higiene.push(produtos[produtos.length - 1]);
        }else if (categoriaProdutos === "limpeza"){
            limpeza.push(produtos[produtos.length - 1]);
    }

    }
    document.write("<h1>Frutas: " + fruta + "<br>Legumes: " + legumes + "<br>Laticinio: " + laticinio + "<br>Congelado: " + congelado + "<br>Higiene: " + higiene + "<br>Limpeza: " + limpeza);
    alert("Sua lista foi gerada! Agradeço pela oportunidade :D")
}   
adicionandoLista();