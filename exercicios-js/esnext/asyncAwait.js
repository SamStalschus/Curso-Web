// usando Async
const http = require('http') // fazendo um require em http que é um módulo do node

const getTurma = letra => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => { // uso o método get de http que vai me dar uma resposta
            let resultado = ''
    
            res.on('data', dados => { // necessário fazer isso pois o get não retorna todos os dados de uma vez, por isso precisamos ir concatenando conforme ele vai retornando...
                resultado += dados
            })
    
            res.on('end',  () => { 
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
                
            })
        })
    })

}

// Recurso recente do ES8
// Simplificar o uso de promisse
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    