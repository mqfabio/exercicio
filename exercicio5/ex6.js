//const transacoes = require("./transacoes.json");

function agruparMesEAno(lista) {
    let yearMonth

    const groups = lista.reduce((groups, transacao) => {
        let splitedDate = transacao.data.split('-')
        yearMonth = splitedDate[0] + "-" + splitedDate[1]
        if (!groups[yearMonth]) {
            groups[yearMonth] = [];
        }
        groups[yearMonth].push(transacao)
        
        return groups;
       

    }, {})

    const transacoesAgrupadas = Object.keys(groups).map((yearMonth) => {
        return {
            yearMonth,
            transacoes: groups[yearMonth]

        };
    });

    return transacoesAgrupadas
}

function transacoesNaOrdem(listaTransacoes) {
    let listaOrdenada = listaTransacoes.sort((a,b) => {
        return Date.parse(b.yearMonth) - Date.parse(a.yearMonth) 
    })
return listaOrdenada
}


function relatodioTransacoes(transacoesAgrupadaPorMes) {
    const resultadoRelatorioTransacoes = []

    transacoesAgrupadaPorMes.map(iten => {
        let data = new Date(iten.transacoes[0].data)
        let ano = data.getFullYear()
        let mes = data.getMonth()
        let totalBeneficios = iten.transacoes.reduce((valorAnt, valorInicial) => valorAnt + valorInicial.beneficio.valor, 0);
        let mediaDosBeneficios = totalBeneficios / iten.transacoes.length;
        resultadoRelatorioTransacoes.push({
            "ano": ano,
            "mes": mes + 1,
            "quantidadeDeTransacoes": iten.transacoes.length,
            "totalDeBeneficios": totalBeneficios,
            "ValorMedioDosBeneficios": mediaDosBeneficios
        })
    })

    return resultadoRelatorioTransacoes
}

export default function relatoriosPorMes(transacoes) {
    let agrupados = agruparMesEAno(transacoes)
    let listaOrdenada = transacoesNaOrdem(agrupados)
    let relatorios = relatodioTransacoes(listaOrdenada)
    return relatorios
}


