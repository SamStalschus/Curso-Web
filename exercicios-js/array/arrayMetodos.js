const pilotos = ['Vettel', 'Alonso', 'Raiokken', 'Massa']
pilotos.pop() // retira o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // adciona um elemento na ultima posição do Array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do Array (deixa meio que reorganizado)
console.log(pilotos)

pilotos.unshift('Hamilton') // adciona na primeira posição do Array
console.log(pilotos)

// splice pode adicionar e remover elementos no Array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removendo apenas 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1)

// cria um novo array com base em uma medida pré selecionada
const algunsPilotos2 = pilotos.slice(1 , 4) // o índice 1 entra, porém o índice 4 não
console.log(algunsPilotos2)
