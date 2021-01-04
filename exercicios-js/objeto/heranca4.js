const teste = function () {

}

console.log(teste.prototype)

const obj = new teste

teste.prototype.nome = 'Samuca'

console.log(teste.prototype)

console.log(obj.nome)

obj.cabelo = 'Ruivo'

console.log(teste.prototype)

console.log(obj)
