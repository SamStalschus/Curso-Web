const pai = {
    nome: 'Samuca',
    corCabelo: 'preto'
}

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha), Object.keys(filha2))

// para saber se o objeto pertence ao atributo ou veio por herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)

}