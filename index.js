let pessoa = {
    nome: 'Fabio',
    idade: 33,
    sobrenome: 'Martinez de Queiroz',
    comida: ['lazanha', 'carne'],
    familia: {
        pai: 'Raimundo Nonato',
        idadePai: 67,
        mae: 'Regina Martinez',
        idadeMae: 62,
    },
    profissao: {
        salario: 1.23500,
        funcao: 'Estagiário',
        empresa: 'Vertem',
        gestor: 'Morimar Moura'
    }

};

console.log (`Meu nome é ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, trabalho na ${pessoa.profissao.empresa} como ${pessoa.profissao.funcao}, recebendo ${pessoa.profissao.salario} por mes, e o meu gestor é o ${pessoa.profissao.gestor}.
O nome do meu pai é ${pessoa.familia.pai} e ele tem ${pessoa.familia.idadePai} anos, e o da minha mãe é ${pessoa.familia.mae} e ela tem ${pessoa.familia.idadeMae} nos.
Minhas comidas favoritas são ${pessoa.comida} `)



