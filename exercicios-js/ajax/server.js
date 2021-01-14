const bodyParser = require('body-parser') // interpreta os dados e deixa pronto para serem manipulados
const express = require('express')
const app = express() // instanciar express

// middleware 
app.use(express.static('.')) // servir todos os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true})) // todas as reqs bateem aqui se vier algum formato a partir de uma submit de um formulário por exemplo, essa parte vai ler e transformar em objeto
app.use(bodyParser.json()) // transforma em json

// app.get('/teste', (req, res) => res.send(new Date)) apenas teste

const multer = require('multer') // interpretar o arquivo que veio do formulário do upload

const storage = multer.diskStorage({ //recebe um objeto para configurar tanto a pasta quanto o nome no momento de salvar
     destination: function(req, file, callback) {
         callback(null, './upload') // qual a pasta?
     },   
     filename: function(req, file, callback) {
         callback(null, `${Date.now()}_${file.originalname}`)
     }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => { // trata a calback do upload
        if(err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    //forma de receber dados do frontend no express
    //req.body, req.query(?params(caixa de texto ex formulário)), req.params(/:params)
    const par = parseInt(req.query.numero) % 2 ===0
    res.send({
        resultado: par ? 'par' : 'ímpar'
    })
})


app.listen(8080, () => console.log('executando')) // startar o servidor