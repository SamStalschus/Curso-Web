const escola = 'Cod3r'

console.log(escola.charAt(4)) // retorna o caracter que está no índice 4 da String
console.log(escola.charCodeAt(3)) // retorna o valor na tabela ASC do valor que está no índice 3 da String
console.log(escola.indexOf('o')) // verifica se 'o' está na palavra escola e retorna a sua posição
console.log(escola.substring(3)) // inicia a leitura da String a partir do índice 3
console.log(escola.substring(0, 3)) // faz a leitura do índice zero até o índice 3 mas sem incluir o índice 3
console.log('Escola '.concat(escola).concat('!')) // concatenando
console.log(escola.replace(3, 'e')) // faz uma substituição da casa '3' da String pela letra 'e'


console.log('Samuel, Samara, Davi'.split(',')) // pega toda uma String e transforma em um Array, delimitando as casas através da vírgula