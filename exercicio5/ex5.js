//Somar o valor dos benefícios das transações que tem o "status" como "confirmado"

const transacoes = require("./transacoes.json")

/*
function SomarValorBeneficios(listaBeneficios) {
    let somaValor = 0;
    listaBeneficios.forEach(transacao => {
        if(transacao.status === 'confirmado') {
            somaValor += transacao.beneficio.valor;
        }
    })
    return somaValor
}

console.log(SomarValorBeneficios(transacoes))*/

function SomarValorBeneficiosConfirmados(listaBeneficios) {
    const trasacoesConfirmadas = listaBeneficios.filter(transacao => transacao.status === 'confirmado') 
    const somaValor = trasacoesConfirmadas.reduce((valorAnt, valorAtual) => valorAnt + valorAtual.beneficio.valor, 0)
    
    return somaValor
    
}

console.log(SomarValorBeneficiosConfirmados(transacoes))



