const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // importanto o axios

const paisChina = response => response.pais === 'China'
const mulheres = response => response.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(paisChina)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(func)
})
// mulher chinesa com menor salário?




