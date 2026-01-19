//Insere somente uma linha
db.usuarios.insertOne({
    "nome": "Caio Robert",
    "documento": "1234567811",
    "telefone": "11961443366"
});

//Insere varias linhas (ai precisa ser como array usando as chaves [])
db.produtos.insertMany([
    {
        "codigoBarras": 12345678910,
        "nome": "Doritos",
        "marca": "Elma Chips",
        "valor":  9.99,
        "quantidade": 5
    },
    {
        "codigoBarras": 12345678911,
        "nome": "Papel Higienico",
        "marca": "Neve",
        "valor":  20,
        "quantidade": 3
    }
]);

//Mais genérico, pode ser 1 ou muitas linhas, sendo um mix dos 2 últimos
db.usuarios.insert({
    "nome": "Layanne Santos",
    "documento": "1234567812",
    "telefone": "11965517200",
    "endereco": "Av. Prof. Luiz Ignácio Anhaia Mello, 1655, Ap 1711-E"
});