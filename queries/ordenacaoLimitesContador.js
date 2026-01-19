//Consultas de projeção
//Específico quais campos eu quero ou não na consulta, passando o nome dele + 0 ou 1, 0 para os que eu não quero, 1 par aos que eu quero
db.produtos.find({
    
}, {
   dataEntrada: 0,
   marca: 0 
});

//Busca só com os campos que eu quero
db.produtos.find({
    
}, {
   codigoBarras: 1,
   valor: 1 
});

//Conta quantos registros tem na minha busca (find())
db.produtos.find().count();

//Conta quantos registros tem na minha busca (find()) com filtro
db.produtos.find({
    marca: {
        $eq: "Elma Chips"
    }
}).count();

//Ordenação por campo desejado. Usando o 1 para ordenar de forma crescente, e -1 para decrescente
db.produtos.find().sort({
    nome: 1
});

//Ordenação decrescente
db.produtos.find().sort({
    nome: -1
});

//Limitar os registros retornados (como o TOP 2 ou LIMIT2 em bancos SQL)
db.produtos.find().limit(2);