// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Samuca',
    idade: 21,
    peso: 74.9,
    endereço: {
        logradouro: 'Rua José Aires',
        numero: 3
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)