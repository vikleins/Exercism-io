const horaTrabalhada = 8

function taxaDiaria(taxaHoraria) {
    return taxaHoraria * horaTrabalhada
}

function diasDeProjeto(orcamentoFixo, taxaHoraria) {
    return Math.floor(orcamentoFixo / (taxaDiaria(taxaHoraria)))
}


function precoTotal(taxaHoraria, numeroDeDias, porcentagem) {
    let valorComDesconto = taxaDiaria(taxaHoraria) * numeroDeDias * (1 - (porcentagem / 100))
    let valorRestante = taxaDiaria(taxaHoraria) * numeroDeDias % 22
    return Math.ceil(valorRestante + valorComDesconto)
}


// console.log('taxa diaria: ', taxaDiaria(taxaHoraria))
// console.log('dias de Projeto: ', diasDeProjeto(orcamentoFixo, taxaHoraria))
console.log('Preço total: ', precoTotal(89, 230, 42))





// function discoutedRateLargeProject(day, ){
//     var diasRestantes = day%22
//     var mesesTotais = Math.floor(day/22)

//     var desconto = mesesTotais * discount/100
// }

// console.log(daysInBudget(newTotalBudget, newDay))

// //every month has 22 billable days

