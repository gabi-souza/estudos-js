/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

    Depois, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo */

    let bills = { 
        revenue: [2000, 1760, 1200],
        cost: [2759, 1378, 767]
    }

    function sum (array){
        let total = 0;
        for(let value of array){
            total += value
        }
        return total
    }

    function balanceSheet() {
        const calculateRevenue = sum(bills.revenue)
        const calculateCost =  sum(bills.cost)

        const total = calculateRevenue - calculateCost

        const tudoCerto = total >=0 

        let message = "Seu saldo está negativo"
        
        if(tudoCerto){
            message = "Seu saldo está positivo"
         }
            console.log(` ${message}:R$${total.toFixed(2)}`)
    }

   balanceSheet () 