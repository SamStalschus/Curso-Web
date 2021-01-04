 // First-Class Orer
 // Higher-order function

 // criar de forma literal usando o function
 function fun1() { }

 // armazenar função em uma variável
 const fun2 = function () {} // função anonima sem nome

 // armazenar em um Array
 const array = [function (a, b) { return a + b}, fun1, fun2]

 // armazenar em um atributo de objeto
 const obj = {}
 obj.falar = function () { return 'Opa'}

 // passar função como parâmetro
 function run(fun) {
     fun()
 }
 run(function() { console.log('Executando....')})

 // uma função pode retornar/conter uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
        return a + b + c
    }
}

soma(2, 3)(4)