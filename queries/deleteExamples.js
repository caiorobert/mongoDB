db.produtos.find();

//Remover um registro (aqui remove somente 1)
db.produtos.deleteOne({
    _id: ObjectId("696d5798d16e5330e144152e")
});

//Remove registros (vai remover 1 ou mais registros)
db.produtos.deleteMany({
    nome : "Papel Higienico"
});

//Busca o registro e deleta, e ele me retorna qual registro foi deletado
db.usuarios.findOneAndDelete({
    _id : ObjectId("696d66019205f5be1f44152e")
});