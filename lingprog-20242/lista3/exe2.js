
let preco = 5
const despesa = 200
let qtde = 120
let lucro
let maiorLucro = 0
let melhorPreco = 0
console.log(`preço      qtde    despesa     lucro`)
while (preco >= 1){
    lucro = (preco * qtde) - 200
    if (maiorLucro < lucro){
        maiorLucro = lucro
        melhorPreco = preco
    }
    console.log(`${preco.toFixed(2)} ${qtde} ${despesa} ${lucro}`)
    preco = preco - 0.50
    qtde = qtde + 26
}
console.log(`Melhor preço ${melhorPreco} com maior lucro ${maiorLucro}`)