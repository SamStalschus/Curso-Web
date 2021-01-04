const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']

const carro = {
    modelo: 'A4',
    propietario: {
        nome: 'Samuca',
        idade: 21,
        endereco: {
            logradouro: 'Rua José Aires',
            numero: 3
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Kimberly',
        idade: 41
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
//delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
