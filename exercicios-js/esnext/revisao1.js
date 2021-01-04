// template string
const produto = 'Ipad'
console.log(`produto ${produto}`)

// destructuring
const [s, a, m, u, ...el ] = 'kakinha'

console.log(s, a, m, u, el)

const [x, y] = [1, 2, 3, 4, 5]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 23}
console.log(i, nome)
