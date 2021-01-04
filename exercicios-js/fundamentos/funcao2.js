// Armazenando uma funcao em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variável
const soma = (a, b) =>{
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito (executa uma única sentença e retorna o resultado dela)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Um exemplo meu
const addValor = a => a++

console.log(addValor(1))