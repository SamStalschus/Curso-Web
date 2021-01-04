const produtos = [
    { nome: 'Notebook', preco: 5999, fragil: true},
    { nome: 'Celular', preco: 1000, fragil: false},
    { nome: 'Cadeira', preco: 500, fragil: true}
]


const todosFrageis = (resultado, fragil) => resultado && fragil
console.log(produtos.map( a => a.fragil).reduce(todosFrageis))

const algumFragil = (resultado, fragil) => resultado || fragil
console.log(produtos.map( a => a.fragil).reduce(algumFragil))