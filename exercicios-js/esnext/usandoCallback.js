// sem promisse
const http = require('http') // fazendo um require em http que é um módulo do node

const getTurma = (letra, callback) => { // função com uma callback
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => { // uso o método get de http que vai me dar uma resposta
        let resultado = ''

        res.on('data', dados => { // necessário fazer isso pois o get não retorna todos os dados de uma vez, por isso precisamos ir concatenando conforme ele vai retornando...
            resultado += dados
        })

        res.on('end',  () => { // pega o dado que é uma String e converte para Json e passa para de volta para o Callback
            callback(JSON.parse(resultado))
        })
    })

}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        }) 
    }) 
}) 
