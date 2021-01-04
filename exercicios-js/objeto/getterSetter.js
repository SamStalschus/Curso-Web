const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor ++},
    set valor(valor) { this._valor = valor}
}

console.log(sequencia.valor, sequencia.valor) // acessa o get automaticamente
sequencia.valor = 1000 // acessa o set automaticamente
console.log( sequencia.valor, sequencia.valor)
