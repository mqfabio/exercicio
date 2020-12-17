
//atual = Math.ceil( val_inicial / ( (1+Math.sqrt(Val_inicial))/ 2 ) )

function gerarNumerosFibo(val_inicial, qtd_item_fibo) {
    let penultimo = 0
    let ultimo = 1
    let atual = penultimo + ultimo
    let numeros = []
  
    while(numeros.length < qtd_item_fibo) {
        penultimo = ultimo;
        ultimo = atual;
        atual = penultimo + ultimo;
        if(atual > val_inicial) {
            numeros.push(atual)
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



