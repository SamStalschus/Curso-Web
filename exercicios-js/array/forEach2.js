// implementando um forEach
Array.prototype.forEach2 = function( callback ){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Samuel', 'Samara', 'Sarah', 'Rebecca']


aprovados.forEach2(function(nome, indice) { // a cara interação é passada o índice e o elemnto
    console.log(`${indice +1}) ${nome}`)
})