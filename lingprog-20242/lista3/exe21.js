// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();
let opcao
let cand1 = 0; let cand2 = 0; let cand3 = 0; let cand4 = 0
let nulo = 0; let branco = 0;
do {
    console.log(`Informe um valor`)
    console.log(`1. Cand 1 \n2. Cand 2 \n3. Cand 3 \n4. Cand 4`)
    console.log(`5. Nulo \n6. Branco \n0. Sair`)    
    opcao = Number(prompt())
    switch(opcao){
        case 1: cand1++
                break
        case 2: cand2++
                break
        case 3: cand3++
                break
        case 4: cand4++
                break
        case 5: nulo++
                break
        case 6: branco++
                break
        case 0: console.log(`\n Vai encerrar`)
                break
        default: console.log(`\n Opção inválida`)
    }
}
while (opcao != 0)