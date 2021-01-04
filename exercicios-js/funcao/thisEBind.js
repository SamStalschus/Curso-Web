const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre programação funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // amarra o this da função ao objeto pessoa
falarDePessoa()