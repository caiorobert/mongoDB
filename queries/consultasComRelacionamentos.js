db.categorias.find();

db.produtos.find();

db.produtos.updateMany({
    codigoBarras: { $in: [12345678910, "123456", "123567"]}
},
{
    $set: {
        categoria: ObjectId("696d6e763e62f5185d44152e")
    }
});

db.produtos.updateMany({
    codigoBarras: { $in: ["654321"]}
},
{
    $set: {
        categoria: ObjectId("696d6e763e62f5185d44152f")
    }
});

//Campos acima apenas para consultar e fazer update da coluna de relacionamento do produto com a categoria (como uma PK e FK)

//Consultas com relacionamento usando o lookup
db.produtos.aggregate([
    {
        //o lookup é como um join, e pra funcionar vc informa qual a collection vai ser relacionada, qual campo local é a FK, qual a PK na collection buscada e da um alias
        $lookup: {
            from: "categorias",
            localField: "categoria",
            foreignField: "_id",
            as: "categoria"
        }
    },
    {
        //Pega o resultado do lookup e extrai pra um objeto, útil para dps poder trabalhar esses valores e usa-los, como abaixo
        $unwind: "$categoria"    
    },
    {
        //Busco um campo do meu objeto criado o #unwind, por exemplo o nome
        $addFields: {
            nomeCategoria: "$categoria.nome"
        }
    }
])