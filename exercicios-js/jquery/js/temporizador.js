(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({ // nessa função extend passamos o primeiro objeto padrão e o segundo recebido como parâmetro
            mensagem: 'Em breve!', // se não tiver objeto recebido como parâmetro, esse será usado
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario) // usado regex para capturar os grupos

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()

            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencasEmMili = alvo.getTime() - agora.getTime()
            if(diferencasEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencasEmMili).toISOString()) // tem que usar o toisosting por conta do retorno no date, se ele levar em consideração o nosso fuso horário acontece um erro
                // console.log(diferenca)

                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1])
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        },1000)
        return this // importante colocar esse return para conseguir encadear com outras chamadas
    }
})(jQuery)