//Busca avançada usando regex, no primeiro valor o que eu to buscando, que vai funcionar como um contém, no meu caso, contém "dori", e o segundo parametro dizer
//que eu posso ou não ignorar o case-sensitive na consulta, esse segundo são as opções. Meu exemplo, Doritos é com D maiúsculo, buscando "dori" não encontraria ele.
//É como se fosse um LIKE '%dori%' no SQL
db.produtos.find({ nome: RegExp('dori', 'i') });

//Nas opções (resumo, para melhor entendimento, doc oficial):
//i - ignora o case-sensitive
//m - Busca por coisa que começa ou termina com o valor desejado, como uma letra. Posso buscar tudo que começa ou termina com D. Ele é case-sensitive
//no nosso exemplo db.produtos.find({ nome: RegExp('D', 'm') }) busca os que começa com d
//no nosso exemplo db.produtos.find({ nome: RegExp('$d', 'm') }) busca os que termina com d, ai vai a $ na letra
//x - Ignora todos os caracteres de espaço em branco
//s - Permite busca com caractere de ponto (o ponto mesmo .)
//u - Aceita unicode, mas é redundante, pq o UTF é definido por padrão no operador $regex