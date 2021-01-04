function saudacao(nome) {
    return function(req, res, next) {
        console.log(`seja bem vindo ${nome}.`)
        next()
    }
}

module.exports = saudacao

