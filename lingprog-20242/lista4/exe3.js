let produtos = []
let estoque = []
// vamos ao cadastro
for(let i=0;i<10;i++){
    produtos.push(prompt(`Informe código do produto para cadastro`))
    estoque.push(Number(prompt(`Informe qtde do produto ${produtos[i]} para cadastro`)))
}
// vamos às compras
let cliente = prompt(`Informe código do cliente`)
do {
    let prod = prompt(`Informe o código do produto para compra`)
    let qtde = prompt(`Informe a quantidade da compra`)
    let pos = produtos.indexOf(prod) // percorre o vetor produtos procurando por prod
    if (pos != -1) { // encontrou o produto
        if (estoque[pos] >= qtde) { // tem em estoque
            estoque[pos] -= qtde // atualiza estoque
            console.log(`pedido atendido, o estoque atual é de ${estoque[pos]}`)
        }
        else {
            console.log(`estoque insuficiente`)
        }
    }
    else {
        console.log(`código inexistente`)
    }
    cliente = prompt(`Informe novo cliente. Digite 0 para encerrar`)
}
while (cliente != 0)
// mostre o estoque atualizado
for(let i=0;i<10;i++){
    console.log(`Produto ${produtos[i]} tem estoque ${estoque[i]}`)
}