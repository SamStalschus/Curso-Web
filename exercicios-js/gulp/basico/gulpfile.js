const gulp = require('gulp')
const { series, parallel } = require('gulp') //destructuring importar o series de dentro do gulp o parallel é para execurar em paralelo
// const series = gulp.series outra maneira

const antes1 = callback => {
    console.log('Tarefa antes 1')
    return callback()
}
const antes2 = callback => {
    console.log('Tarefa antes 2')
    return callback()
}
const fim = callback => {
    console.log('Tarefa Fim!')
    return callback()
}
function copiar(callback) { // mostrar p o gulp que a tarefa foi concluida //src serve para selecionar quais arq1uivos
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.series('pastaA/**/*/txt') forma genérica de se trazer um conjunto de arquivos de mesmo tipo fazer transformações neles e jogar eles em alguma pasta
    // .pipe() // faz transformações, podemos ter vários pipes em sequência
    // .pipe(imagensPretas())
    // .pipe(cortarImagens())
        .pipe(gulp.dest('pastaB')) // transferir para a pastaB (mesmo sem ter a pastaB o gulp criou a pastaB)
    return callback()
}

// exportar (é necessário exportar a tag default)
module.exports.default = series( // Aqui as funções serão executadas em série... de forma sequencial
    parallel(antes1, antes2), // antes 1 e antes 2 serão usados em paralelo
    copiar,
    fim
)