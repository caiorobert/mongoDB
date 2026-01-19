//Aqui cria a coluna customizada ValorTotalProdutos
db.produtos.aggregate([
    {
        $addFields: {
            ValorTotalProdutos: { $multiply: ["$valor", "$quantidade"] }
        }
    }
]);

//Crio uma view, no exemplo abaixo, vai criar a view produtosValores
db.createView(
    "produtosValores", //Nome da view
    "produtos", //Collection que ela usa
    [
        {
            $addFields: {
                ValorTotalProdutos: { $multiply: ["$valor", "$quantidade"] }
            }
        }
    ] //Passa como array o que contém na view a mais, por exemplo criando o campo customizado ValorTotalProdutos
);

//Dps de criada, a view pode ser usada como se fosse uma collection, e vai ter os campos da collection que ela referencia + os campos customizados
db.produtosValores.find();