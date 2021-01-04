console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma nao recomendada de se criar Arrays
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // atribuição, forma recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[3])

//formas de add elementos no Array
aprovados[3] = 'Paulo' // interessante para substituir elemento
aprovados.push('Abia') // adciona na ultima posição
console.log(aprovados.length)

aprovados[9] = 'Samuka' // todos os elementos anteriores que não estavam preenchidos agora serão preenchidos com valores undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 2)

console.log(aprovados)