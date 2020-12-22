const transacoes = require("./transacoes.json");

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
    let listaRdenada = listaTransacoes.sort((a,b) => {
        return Date.parse(b.yearMonth) - Date.parse(a.yearMonth) 
    })
return listaRdenada
}


function relatodioTransacoes(transacoesAgrupadaPorMes) {
    const resultadoRelatorioTransacoes = []

    transacoesAgrupadaPorMes.map(iten => {
        let data = new Date(iten.transacoes[0].data)
        let ano = data.getFullYear()
        let mes = data.getMonth()
        let totalBeneficios = iten.transacoes.reduce((valorAnt, valorInicial) => valorAnt + valorInicial.beneficio.valor, 0);
        mediaDosBeneficios = totalBeneficios / iten.transacoes.length;
        resultadoRelatorioTransacoes.push({
            "Ano": ano,
            "Mes": mes + 1,
            "Quantidade de transações": iten.transacoes.length,
            "Total de beneficios": totalBeneficios,
            "Valor medio dos beneficios": mediaDosBeneficios
        })
    })

    return resultadoRelatorioTransacoes
}

function relatoriosPorMes(transacoes) {
    let agrupados = agruparMesEAno(transacoes)
    let listaOrdenada = transacoesNaOrdem(agrupados)
    let relatorios = relatodioTransacoes(listaOrdenada)
    return relatorios
}


console.log(JSON.stringify(relatoriosPorMes(transacoes)))  