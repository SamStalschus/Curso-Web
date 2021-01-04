// novo recurso ES2015

const pessoa = {
    nome: 'Samuca',
    idade: 21,
    endereco: {
        logradouro: 'Rua José Aires',
        numero: 35
    }
}

// como tirar desse objeto alguns atributos?

const { nome, idade} = pessoa
console.log(nome, idade)

const{ nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome , bemHumorado)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)