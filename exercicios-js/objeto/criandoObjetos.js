// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// função factory
function obj3 () {
    return{}
}
console.log(obj3())

// função construtora
function obj4 (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
    this.preco = preco
    this.desc = desc
}

const p1 = new obj4('Teclado', 100.00, 0.15)
console.log(p1)
console.log(p1.getPrecoComDesconto())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)