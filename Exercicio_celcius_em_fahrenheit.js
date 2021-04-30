/* Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra */

function conversionDegree(degree){
    const celsius = degree.toUpperCase().includes('C')
    const fahrenheit = degree.toUpperCase().includes('F')

    // Fluxo de Erro
    if(!celsius && !fahrenheit){
        throw new Error('Grau Não Identificado')
    }

    // Fluxo Ideal
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo Alternativo
    if(celsius){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula (updatedDegree) + degreeSign
}


try{
    console.log(conversionDegree('50C'))
    console.log(conversionDegree('50F'))
    console.log(conversionDegree('50G'))
} catch(error) {
    console.log(error.message)
}