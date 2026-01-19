db.produtos.find();

//Group igual o GROUP BY
db.produtos.aggregate([
    {
        $addFields: {
            totalValorProduto: {
                $multiply: ["$valor", "$quantidade"]
            }
        }
    },
    {
        $group: {
            _id: 1, //Se eu passo 1 no Id, eu quero agrupar tudo
            totalValorEstoque: { $sum: "$totalValorProduto" }, //Soma todos os valores da coluna recem criada totalValorProduto
            mediaValorEstoque: { $avg: "$totalValorProduto"}, //Media de todos os valores da coluna recem criada totalValorProduto
            menorValorProduto: { $min: "$valor"}, //Busca qual o produto com o menor valor
            maiorValorProduto: { $max: "$valor"}, //Busca qual o produto com o maior valor
        }
    }
]);

db.produtos.aggregate([
    {
        $addFields: {
            totalValorProduto: {
                $multiply: ["$valor", "$quantidade"] //Criou o campo customizado totalValorProduto multiplicando valor x qtd
            }
        }
    },
    {
        $group: {
            _id: "$categoria",
            valorTotal: { $sum: "$totalValorProduto" }, //agrupou pelo campo categoria do document local (produtos)
            quantidadeProdutos: { $sum: 1 } //Soma 1 pra cada produto encontrado no agrupamento da categoria. Serve pra me trazer qtos tem por categoria
        }
    },
    {
        //Fez o lookup (join) com a collection categorias
        $lookup: {
            from: "categorias",
            localField: "_id",
            foreignField: "_id",
            as: "categoria"
        }
    },
    {
        $unwind: "$categoria" //transformou o array que resulta do lookup em um objeto para poder ser trabalhado
    },
    {
        //usa o operador $project pra pegar o campo que eu quero da categoria extraída no $unwind, pega o campo nome, e mantém na visualização 
        //os campos valorTotalcriado e quantidadeProdutos lá no pipeline (estágio) do group
        $project: {
            nome: "$categoria.nome",
            valorTotal: 1, //Colocar como 1 significa que quero ele na consulta, como 0 ele ficaria oculto
            quantidadeProdutos: 1
        }
    }
]);