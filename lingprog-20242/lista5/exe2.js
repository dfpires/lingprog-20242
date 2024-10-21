let estoque = [
    {nome: "Play Station 5", qtde: 2, preco: 3700},
    {nome: "Teclado mecânico", qtde: 12, preco: 700},
    {nome: "Mouse wireless", qtde: 7, preco: 120},
    {nome: "Head phone", qtde: 10, preco: 500}
]
console.log(`Lista dos produtos`)
for(let i=0;i<estoque.length;i++){
    console.log(`Nome: ${estoque[i].nome} e Qtde: ${estoque[i].qtde}`)
}

console.log(`Produto com menor qtde em estoque`)
let objMenorQtde = estoque[0]
for(let i=0;i<estoque.length;i++){
    if (estoque[i].qtde < objMenorQtde.qtde){
        objMenorQtde = estoque[i]
    }
}
console.log(objMenorQtde)

console.log(`Valor total em estoque`)
let total = 0
for(let i=0;i<estoque.length;i++){
    total += estoque[i].qtde * estoque[i].preco
}
console.log(total)