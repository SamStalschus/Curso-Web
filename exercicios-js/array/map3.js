Array.prototype.map2 = function( callback ) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(this[i], i, this)
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Lapis", "preco": 7.45}',
    '{ "nome": "Lapiseira", "preco": 4.90}',
    '{ "nome": "Caneta", "preco": 1.45}',
    '{ "nome": "Borracha", "preco": 5.45}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
