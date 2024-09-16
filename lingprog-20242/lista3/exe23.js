// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();
let opcao
do {
    console.log(`Menu de Opções: \n1. Novo Salário \n2. Férias \n3. Décimo Terceiro \n4. Sair`)
    opcao = Number(prompt())
    switch(opcao){
        case 1: let salario = Number(prompt("Informe salário"))
                let novo
                if (salario >=0 && salario < 210){
                    novo = salario + salario*15/100
                }
                else if (salario >= 210 && salario <= 600){
                    novo = salario + salario*10/100
                }
                else if (salario > 600){
                    novo = salario + salario*5/100
                }
                else {
                    console.log(`Salário informado é negativo`)
                    break
                }
                console.log(`O novo salário é ${novo}`)
                break
        case 2: salario = Number(prompt("Informe salário")) 
                let ferias = salario + salario/3
                console.log(`O valor das férias é ${ferias}`)
                break
        case 3: salario = Number(prompt("Informe salário"))
                let meses = Number(prompt("Informe número de meses"))
                let dt = salario*(meses/12)
                console.log(`O décimo terceiro é ${dt.toFixed(2)}`)
                break
        case 4: console.log(`Opção 4`); break
        default: console.log(`Opção inválida`) 
    }
}
while (opcao != 4)