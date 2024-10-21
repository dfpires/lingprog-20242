 let totalVendas = [10000, 20000, 30000, 40000, 50000, 60000, 70000]
 let percentual = [10, 5, 10, 5, 10, 5, 10]
 let nomes = ["Paulo", "Pedro", "José", "Carlos", "Lucas", "Zé", "Jr"]
 let valoresReceber = []
 // calcula valor a receber de comissão
 for(let i=0;i<nomes.length;i++){
    valoresReceber.push(totalVendas[i]*percentual[i]/100)
 }
 // calcula o total de vendas
 let total = 0
 for(let i=0;i<7;i++){
    total = total + totalVendas[i]
 }
 // calcula o maior valor a receber e quem receberá
 let maiorComissao = valoresReceber[0]
 let nomeMaiorComissao = nomes[0]
 for(let i=0;i<nomes.length;i++){
    if (maiorComissao > valoresReceber[i]){
        maiorComissao = valoresReceber[i]
        nomeMaiorComissao = nomes[i]
    }
 }
 // calcula o menor valor a receber e quem receberá
 let menorComissao = valoresReceber[0]
 let nomeMenorComissao = nomes[0]
 for(let i=0;i<nomes.length;i++){
    if (menorComissao > valoresReceber[i]){
        menorComissao = valoresReceber[i]
        nomeMenorComissao = nomes[i]
    }
 }