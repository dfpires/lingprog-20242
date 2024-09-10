// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();

let n = Number(prompt("Informe o valor de n: "))
let soma = 0
let nota
let conta = 1
while(conta <= n){
    nota = Number(prompt(`Informe a nota do aluno ${conta}: `))
    soma = soma + nota
    conta++
}
console.log(`A média das notas é ${soma / n}`)