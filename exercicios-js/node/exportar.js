console.log(module.exports === this)
console.log(module.exports === exports)

// apenas variáveis que apontam para o mesmo endereço
this.a = 1
exports.b = 2
module.exports.c = 3 // o único que é realmente retornado

exports = null
console.log(module.exports)

module.exports = { publico: true}
