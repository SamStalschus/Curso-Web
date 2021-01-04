const [a] = [10]
console.log(a)

const[n1, , n3, , n5, n8 = 0] = [10, 7, 8, 8]
console.log(n1, n3, n5, n8)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // nesse caso ele pega o valor 6
console.log(nota)