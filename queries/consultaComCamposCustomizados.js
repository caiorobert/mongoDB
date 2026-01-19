//o $addFields adiciona novos campos somente na consulta (campos customizados), e podemos passar uma condição pra isso, por exemplo, o campo valorTotalEstoque 
//é o resultado da multiplicação de valor x quantidade dps da para usar ele de novo, e usar o campo recem criado no primeiro estágio, pra criar um novo
//por exemplo multiplicando o campo recém criado por 3. 
db.produtos.aggregate([
    {
        $addFields: {
            "valorTotalEstoque": {
                $multiply: ["$valor", "$quantidade"]
            }
        }
    },
    {
        $addFields: {
            "quantidadeValorTotalEstoque": {
                $multiply: ["$valorTotalEstoque", 3]
            }
        }
    }
]);

//No exemplo abaixo estaria criando a coluna valorTotalEstoque multiplicando valor x quantidade, dps criaria a coluna ValorSemDesconto somando valor + 1.99.
//Dps cria a coluna ValorComDesconto pegando a subtração de valor - 5.
db.produtos.aggregate([
    {
        $addFields: {
            "valorTotalEstoque": {
                $multiply: ["$valor", "$quantidade"]
            },
            "ValorSemDesconto": {
                $add: ["$valor", 1.99]
            },
            "ValorComDesconto": {
                $subtract: ["$valor", 5]
            }
        }
    }
]);

db.produtos.find();