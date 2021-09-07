// Calcular salário liquido

const salario = (bruto) => {
    // Desconto de 20%
    let percentagem = (20/100) 
    // bruto * (1 - 0.2)
    let liquido = bruto - (bruto * percentagem)
    return liquido
}

const salario_liquido = salario(76995.75);

console.log(salario_liquido);