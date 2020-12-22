let lista1 = [1,5,8,2]
let lista2 = [1,9,'a',5]
let igual = []


lista1.forEach(x => {
    lista2.forEach(y => {
        if(x == y)
            igual.push(x)
    })
})

console.log(igual)