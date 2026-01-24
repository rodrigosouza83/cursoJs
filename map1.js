const produtos = [
    '{ "NomeProd": "Geladeira", "preco": 3669.00 }',
    '{ "NomeProd": "AyrFrier", "preco": 600.00 }',
    '{ "NomeProd": "Liquididicador", "preco": 190.00 }',
    '{ "NomeProd": "Leiteira", "preco": 60.00 }',
    '{ "NomeProd": "Jarra", "preco": 48.00 }',
    '{ "NomeProd": "Televisão", "preco": 2989.00 }'
]
console.log(produtos)

const createObj = json => JSON.parse(json)
const justPrice = produto => produto.preco

const result = produtos.map(createObj).map(justPrice)
const objetos = produtos.map(createObj)

console.log(result)
console.log(objetos)