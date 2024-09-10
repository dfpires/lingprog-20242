// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();
let troca
let j = 1
while (j<=5) {
    let i = 1
    let a = Number(prompt(`Informe o valor da letra A`))
    let b = Number(prompt(`Informe o valor da letra B`))
    let c = Number(prompt(`Informe o valor da letra C`))
    let d = Number(prompt(`Informe o valor da letra D`))
    console.log(`Ordem digitada ${a} ${b} ${c} ${d}`)
    while (i <= 3){
        if (a > b){
            troca = a; a = b; b = troca;
        }
        if (b > c){
            troca = b; b = c; c = troca;
        }
        if (c > d){
            troca = c; c = d; d = troca;
        }
        i++
    }
    console.log(`Ordem crescente ${a} ${b} ${c} ${d}`)
    console.log(`Ordem decrescente ${d} ${c} ${b} ${a}`)
    j++
}