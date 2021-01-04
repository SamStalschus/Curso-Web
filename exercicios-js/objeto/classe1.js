class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this,valor = valor // adicionando ao objeto que está sendo instanciado o mesmo valor que foi passado como parâmetro
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 2000)
const contaDeLuz = new Lancamento('Internet', -99)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
