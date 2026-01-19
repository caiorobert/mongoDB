//Busca 1, se não passar filtro, pega o primeiro que achar
db.produtos.findOne();

//Busca todos
db.produtos.find();

//Busca pelo Id, e aqui o operador seria igual ao = do SQL
db.produtos.find({
    _id: {
        $eq: ObjectId("696d5357369de5765944152f")
    }
});

//Da pra fazer sem usar o $eq também
db.produtos.find({
    _id: ObjectId("696d5357369de5765944152f")
});

//Buscar resultados maiores que o informado
db.produtos.find({
    valor: {
        $gt: 10
    }
});

//Busca resultados maiores ou iguais ao informado
db.produtos.find({
    valor: {
        $gte: 9.99
    }
});

//Busca resultados menores que o informado
db.produtos.find({
    valor: {
        $lt: 15
    }
});

//Busca resultados menores ou iguais ao informado
db.produtos.find({
    valor: {
        $lte: 15.99
    }
});

//Busca resultados menores do que o informado (exemplo pra mostrar que pode ser números, datas e etc.)
db.produtos.find({
    dataEntrada: {
        $lt: ISODate('2025-01-19')
    }
});

//Busca um resultado que não é igual ao informado
db.usuarios.find({
   endereco: {
       $ne: "Av. Prof. Luiz Ignácio Anhaia Mello, 1655, Ap 1711-E"
   } 
});

//Busca resultados com os valores informados, é igual o IN do SQL
db.produtos.find({
    marca: {
        $in: ['Carrefour', 'Elma Chips']
    }
});

//Busca resultados que não sejam dos valores informados, igual ao NOT IN do SQL
db.produtos.find({
    marca: {
        $nin: ['Carrefour', 'Elma Chips']
    }
});