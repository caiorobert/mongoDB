//funciona como o AND do SQL normal
db.produtos.find({
    $and: [
        {
            valor: {
                $gt: 5
            }
        },
        {
            valor: {
                $lt: 18
            }
        },
        {
            marca: {
                $eq: "Elma Chips"
            }
        }
    ]
});

//funciona como o OR do SQL normal
db.produtos.find({
    $or: [
        {
            marca: "Elma Chips"
        },
        {
            marca: "Carrefour"
        },
        {
            valor: 3.50
        }
    ]
});

//Não seja igual ao valor informado
db.produtos.find({
   quantidade: {
       $not: {
           $eq: 5
       }
   }
});

//como se fosse um NOT IN, ou seja, não é igual a 5, a 10, e as condiçães que eu deseja
db.produtos.find({
    $nor: [
        {quantidade: 5},
        {quantidade: 10}
    ]
});

//Verifica por exemplo se o campo endereço existe no meu document
db.usuarios.find({
   endereco: {
       $exists: true
   } 
});

//Verifica quais documentos tem campos com o tipo desejado
db.produtos.find({
   marca: {
       $type: 2
   } 
});