let matriz = [
    [10, 12, 14, 16],
    [17, 18, 19, 20]
]

// encontra a qtde de números entre 12 e 20 em cada linha
let vetor = [0, 0]
let somaPares = 0
let qtdePares = 0
for(let i=0;i<2;i++){
    for(let j=0;j<4;j++){
        if (matriz[i][j] >= 12 && matriz[i][j] <= 20){
            vetor[i]++
        }
        if (matriz[i][j] % 2 == 0){
            somaPares+= matriz[i][j]
            qtdePares++
        }
    }
}
for(let i=0;i<2;i++){
    console.log(`Linha ${i} tem ${vetor[i]} números entre 12 e 20`)
}
if (qtdePares > 0){
    console.log(`Média dos números pares ${somaPares/qtdePares}`)
}
else {
    console.log(`Não existem números pares`)
}