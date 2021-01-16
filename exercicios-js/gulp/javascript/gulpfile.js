// colocar as calculadoras em um arquvo só e tornar mais compatível
const { series } = require('gulp') // series já é um atributo do gulp
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

async function padrao(cb) {
    gulp.src('src/**/*.js') // seleciona todos os arquivos .js dentro de qualquer subpasta que esteja dentro de src
        .pipe(babel({ // atributo de configuração p o babel
            comments: false, // comentários transmitidos para o arquivo final?
            presets: ["env"]
        }))
        .pipe(uglify()) // código minificado enfeiamento
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // resultado concatenadoe nome do arquivo final
        .pipe(gulp.dest('build')) // pasta onde será jogado

    return cb
}

function fim(cb) {
    console.log('Fim')
    return cb()
}

exports.default = series(padrao, fim) // passada a task 'padrao'