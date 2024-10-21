let primeiro = [4, 7, 5, 8, 2, 15, 9, 6, 10, 11]
let segundo = [3, 4, 5, 8, 2]

// produzir o vetor resultante 1
let somaSegundo = 0
for(let i=0;i<5;i++){
    somaSegundo += segundo[i]
}
let vetor1 = []
for(let i=0;i<10;i++){
    if (primeiro[i] % 2 == 0){
        vetor1.push(primeiro[i] + somaSegundo)
    }
}
console.log(vetor1)
// produzir o vetor resultante 2
let vetor2 = []
for(let i=0;i<10;i++){
    if (primeiro[i] % 2 == 1){
        let divisores = 0
        for(let j=0;j<5;j++){
            if (primeiro[i] % segundo[j] == 0){
                divisores++
            }
        }
        vetor2.push(divisores)
    }
}
console.log(vetor2)