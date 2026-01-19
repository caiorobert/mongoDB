db.produtos.find();

//Update onde as primeiras chaves são os filtros, a segunda os campos a serem alterador (SET)
//Filtrando por Id
db.produtos.update({
    _id: {
        $eq: ObjectId("696d5357369de5765944152f")
    }
}, {
    $set: {
        valor: 12.99
    }
});

//Atualiza por código de barras e os campos informados
db.produtos.update({
    codigoBarras: 12345678910
}, {
    $set: {
        valor: 13.99,
        quantidade: 10
    }
});

//Faz update somente em 1 registro
db.produtos.updateOne({
    codigoBarras: 12345678911
}, {
    $set: {
        valor: 22.90,
        quantidade: 10
    }
});

//Faz update em muitos registros. O set também permite incluir novas colunas aos meus documentos
db.produtos.updateMany({
    nome: "Papel Higienico"
}, {
    $set: {
        quantidade: 15,
        categoria: "Produtos de Uso Pessoal"
    }
});

//Busca 1 só e atualiza, e me devolve qual o registro que ele alterou
db.produtos.findOneAndUpdate({
    codigoBarras: 12345678910.0
}, {
    $set:{
        categoria: "Alimentos"
    }
});