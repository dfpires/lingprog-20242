let matriz = [
    [11, 12, 13, 14, 15], 
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25]
]

// percorre a matriz buscando elementos entre 15 e 20
let conta = 0
for(let i=0;i<3;i++){
    for(let j=0;j<5;j++){
        if (matriz[i][j] >= 15 && matriz[i][j]<= 20){
            conta++
        }
    }
}
console.log(`Qtde de elementos entre 15 e 20 é ${conta}`)