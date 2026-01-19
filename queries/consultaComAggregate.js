//Consulta normal, usa o find, dps ordena, dps limita a 2 registros
db.produtos.find()
.sort({nome: 1})
.limit(2);

//Aggregate: É uma busca mais avançada, onde vc utiliza diversos operadores para melhorar sua busca 
db.produtos.aggregate([
    //Primeiro estágio
    {
        //o match funciona igual ao .find()
        $match: {
            $and: [
                {
                    quantidade: {$gt: 1}
                },
                {
                    valor: {$gt: 10}
                }
            ]
        }
    },
    //Segundo estágio
    {
        //o project serve para ocultar um campo ou trazer ele. 0 para ocultar, 1 para trazer
        $project: {
             codigoBarras: 1,
             valor: 1   
        }
    },
    //Posso ter quantos estágios eu quiser. Terceiro estágio
    {
        $count: "totalItens"
    }
]);

db.produtos.aggregate([
    //Primeiro estágio
    {
        //o match funciona igual ao .find()
        $match: {
            $and: [
                {
                    quantidade: {$gt: 1}
                },
                {
                    valor: {$gte: 5}
                }
            ]
        }
    },
    //Segundo estágio
    {
        //funciona igual o .limit(5)
        $limit: 5
    },
    //Terceiro estágio
    {
        $sort: {
            nome: 1
        }
    }
]);

//Exemplo do find com os mesmos filtros do match acima
db.produtos.find({
    $and: [
        {
            quantidade: {$gt: 1}
        },
        {
            valor: {$gt: 10}
        }
    ]
})