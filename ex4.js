let penultimo = 0
let ultimo = 1
let atual = penultimo + ultimo
let acc = 0



function gerarNumerosFibo(val_inicial, qtd_item_fibo) {
    let numeros = []
    while(1) {
        if(atual == val_inicial) {
            let volta = 1
            do {
                penultimo = ultimo;
                ultimo = atual;
                atual = penultimo + ultimo;
                numeros.push(atual)
            }
            while(++volta <= qtd_item_fibo);
            break
        }
        else {
            penultimo = ultimo;
            ultimo = atual;
            atual = penultimo + ultimo;
        }
    }
    return numeros;
}





function ordenarNumeros(numeros, ordem) {

    if(ordem == 'asc'){
        return numeros;
    }
    else {
            return numeros.reverse()
        }        
    
}


 
function gerarProximosNumerosEOrdernar(numeroInicial,qtd, ordem) {
    let listaNumeros = gerarNumerosFibo(numeroInicial, qtd);
    let numerosOrdenados = ordenarNumeros(listaNumeros, ordem);
    return numerosOrdenados;
}
 

console.log(gerarProximosNumerosEOrdernar(5,3,'asc'))



