let lista = [1,2,'a','a','a'];
let acc = 0;
let maior_elemento = 0;
let maior_quantidade = 0;




function count(l, x) {
    let accumulator = 0
    l.forEach(y => {
      if (y == x)
        accumulator++
    })
    return accumulator
  }



lista.forEach(x => {
    acc = count(lista, x)

    if(acc > maior_quantidade) {
        maior_quantidade = acc;
        maior_elemento = x;
    }

    acc = 0
})

console.log(`${maior_elemento} apareceu ${maior_quantidade} vezes na lista`)

