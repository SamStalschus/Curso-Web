const pessoa = {
    nome: 'Rebecca',
    idade: 17,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`
    ${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '22/01/1999'
})

console.log(pessoa)

// Object.assign
const destino = {}
const obj1 = {b: 2}
const obj2 = {c: 3}
const obj = Object.assign(destino, obj1, obj2, pessoa)
console.log(destino)