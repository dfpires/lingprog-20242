// pacote para a função prompt funcionar
const prompt = require('prompt-sync')();
let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
for(let i = 1; i<= 8;i++){
    let idade = Number(prompt(`Informe a idade ${i}`))
    if (idade >= 0 && idade <=15){
        f1++
    }
    else if (idade >= 16 && idade <=30){
        f2++
    }
    else if (idade >= 31 && idade <=45){
        f3++
    }
    else if (idade >= 46 && idade <=60){
        f4++
    }
    else if (idade > 60){
        f5++
    }
    else console.log(`Idade inválida`)
}
console.log(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`)
console.log(`%F1: ${f1*8/100} %F5: ${f5/8*100}`)