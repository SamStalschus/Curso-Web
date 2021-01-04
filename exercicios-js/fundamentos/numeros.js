const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))

const avaliacao1 = 9.123
const avaliacao2 = 6.123

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // controla a quantidade de casas
console.log(media.toString()) // converte em string
console.log(media.toString(2)) // converte em binário
console.log(typeof media) // para mostrar o tipo da variável

console.log('10' / 2) // interessantíssimo

console.log((10).toString())