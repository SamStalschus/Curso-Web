const obj = { 
    a: 1,
    b: 2, 
    c: 3, 
    soma() {
         return a + b + c
        } }
console.log(JSON.stringify(obj)) // exclui a função pois json só suporta texto

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // transformando para JSON