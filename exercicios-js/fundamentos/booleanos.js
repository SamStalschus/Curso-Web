let isAtive = false
console.log(isAtive)

isAtive = true
console.log(isAtive)

isAtive = 0
console.log(!!isAtive)

console.log('Os verdadeiros...........')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![ ])
console.log(!!{ })
console.log(!!Infinity)
console.log(!!(isAtive = [ ]))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtive = ''))

console.log('Pra finalizar.......')
console.log(!!('' || 0 || null || ' ')) // basta um verdadeiro


let nome = 'Samuca'
console.log(nome || 'Desconhecido')