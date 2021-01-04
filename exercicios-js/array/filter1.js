const produtos = [
    { nome: 'Notebook', preco: 5999, fragil: true},
    { nome: 'Celular', preco: 1000, fragil: false},
    { nome: 'Cadeira', preco: 500, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 900
}).filter(function (p) {
    return p.fragil == true
}))





