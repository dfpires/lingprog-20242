let opcao
let teams = 0; let impressa = 0; let email = 0; let tantoFaz = 0;
do {
    opcao = prompt(`Informe formato de avaliação`)
    switch(opcao){
        case 'T': teams++
                break
        case 'P': impressa++
                break
        case 'E': email++
                break
        case 'F': tantoFaz++
                break
        case 'X': console.log(`Encerrada a leitura de dados`)
                break
        default: console.log(`Formato inválido`)
    }
}
while(opcao != 'X')
let total = teams + impressa + email + tantoFaz
console.log(`${teams} ${impressa} ${email} ${tantoFaz}`)
console.log(`${tantoFaz/total*100}`)
// ordena
let aux1, aux2, aux3, aux4
aux1 = teams; aux2 = impressa; aux3 = email; aux4 = tantoFaz
let conta = 1; let aux
while (conta <= 3){
    if (aux1 > aux2){
        // troca aux1 por aux2
        troca = aux1; aux1 = aux2; aux2 = troca
    }
    if (aux2 > aux3){
        // troca aux2 por aux3
        troca = aux2; aux2 = aux3; aux3 = troca
    }
    if (aux3 > aux4){
        // trica aux3 por aux4
        troca = aux3; aux3 = aux4; aux4 = troca
    }
}
console.log(`${aux1} ${aux2} ${aux3} ${aux4}`)