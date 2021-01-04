const aprovados = ['Samuel', 'Samara', 'Sarah', 'Rebecca']

// forEach com callback para cada interação
aprovados.forEach(function(nome, indice) { // a cara interação é passada o índice e o elemnto
    console.log(`${indice +1}) ${nome}`)
})

// maneira diferente
aprovados.forEach(nome => console.log(nome))

// outra maneira
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

