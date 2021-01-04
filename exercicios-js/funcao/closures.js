// contexto lexixo em ação
const x = 'Global'

function fora () {
    const x = 'Local'
    function dentro() { // função dentro foi declarada dentro, por isso retorna 'Local'
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())