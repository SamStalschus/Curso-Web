console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'Samuca'
//obj1['name'] = 'Samuca'
console.log(obj1.name)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log(1+1)
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()