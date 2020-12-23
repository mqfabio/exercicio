
import { expect } from "@jest/globals"
import relatoriosPorMes from "./../exercicio5/ex6"
let transacoes = [  
    {
    "id": "a",
    "status": "confirmado",
    "data": "2019-02-01T12:15:05.000-03:00",
    "beneficio": {
        "valor": 10,
        "tipo": "desconto"
    }  
},

{
    "id": "a",
    "status": "confirmado",
    "data": "2020-01-01T12:15:05.000-03:00",
    "beneficio": {
        "valor": 10,
        "tipo": "desconto"
    }  
},

{
    "id": "p",
    "status": "confirmado",
    "data": "2020-01-01T12:15:05.000-03:00",
    "beneficio": {
        "valor": 20,
        "tipo": "desconto"
    }  
},

{
    "id": "b",
    "status": "confirmado",
    "data": "2019-01-01T12:15:05.000-03:00",
    "beneficio": {
        "valor": 15,
        "tipo": "desconto"
    }  
},]

test("testando ordenação de ano e mes", () => {
      
    let relatorio = relatoriosPorMes(transacoes)
    expect(relatorio[0].ano).toBe(2020)
    expect(relatorio[1].ano).toBe(2019)
    expect(relatorio[1].mes).toBe(2)
    
})

test("testando quantidade transação por mes", () => {
   
    let relatorio = relatoriosPorMes(transacoes)
    expect(relatorio[0].quantidadeDeTransacoes).toBe(2)
    expect(relatorio[1].quantidadeDeTransacoes).toBe(1)
    
})

test("testando total de beneficios por mes", () => {
   
    let relatorio = relatoriosPorMes(transacoes)
    expect(relatorio[0].totalDeBeneficios).toBe(30)
    expect(relatorio[1].totalDeBeneficios).toBe(10)
    
})

test("testando valor medio das transacoes por mes", () => {
   
    let relatorio = relatoriosPorMes(transacoes)
    expect(relatorio[0].ValorMedioDosBeneficios).toBe(15)
    expect(relatorio[1].ValorMedioDosBeneficios).toBe(10)
    
})
