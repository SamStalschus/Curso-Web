const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... (pode travar o event loop arquivos grandes)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
