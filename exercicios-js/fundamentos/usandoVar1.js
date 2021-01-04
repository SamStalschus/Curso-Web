{ 
    { 
        { 
            { 
                var sera = 'Será???' // variável global
            } 
        } 
    }   
}
console.log(sera)

function teste() {
    var local = 123 // variável não global
}

teste()
console.log(local)