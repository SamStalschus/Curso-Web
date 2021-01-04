Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 5999, fragil: true},
    { nome: 'Celular', preco: 1000, fragil: false},
    { nome: 'Cadeira', preco: 500, fragil: false}
]

console.log(produtos.filter2(function(p) {
    return p.preco > 900
}).filter2(function (p) {
    return p.fragil == true
}))
