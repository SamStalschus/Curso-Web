const express = require('express')
const app = express() // construtor do express
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('Samuka'))

app.get('/clientes/relatorio',(req, res, next) => {
    res.send(`Cliente relatório: ${req.query.completo} ano =${req.query.ano}`)
})

app.get('/clientes/:id',(req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado`)
    next()
})

app.post('/corpo',(req, res, next) => {
    res.send(req.body)
})


app.get('/opa', (req, res, next) => { // qualquer endpoint chamado em cima desse localhost passa por essa function
    res.json({
        name: 'Samuel',
        idade: 21,
        sexo: 'masculino'
    })
    next()
   // res.send('Estou <b>bem<b/>')
})

app.use('/opa', (req, res) => {
    console.log('SERÁ QUE SEREI CHAMADO?')
})


app.listen(3008, () => {
    console.log('Backend executando')
})
