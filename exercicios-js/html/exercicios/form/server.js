const express = require('express')
const app = express()
const bodyParser = require('body-parser') // faz um parser no corpo do request joga os dados dentro do request.body transorma o urlencoded pra ser interpretado


app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns, Usuário incluido</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns, Usuário alterado</h1>')
})

app.listen(3003)