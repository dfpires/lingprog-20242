
for(let i=0;i<12;i++){ // para cada mês
    matriz[i] = [] // cria vetor dentro da matriz 
    for(let j=0;j<4;j++){ // para cada semana
        matriz[i][j] = Number((Math.random() * 1000).toFixed(2))
    }
}
console.log(matriz)
// total vendido em cada mês
for(let i=0;i<12;i++){ // para cada mês
    let totalMes = 0
    for(let j=0;j<4;j++){ // para cada semana
        totalMes += matriz[i][j]
    }
    console.log(`Total vendido em ${meses[i]} foi de R$ ${totalMes.toFixed(2)}`)
}
// total vendido em cada semana
for(let j=0;j<4;j++){
    let totalSemana = 0
    for(let i=0;i<12;i++){
        totalSemana += matriz[i][j]
    }
    console.log(`Total vendida na ${j+1}a. semana R$ ${totalSemana.toFixed(2)}`)
}   

// total vendido no ano
let totalAno = 0
for(let i=0;i<12;i++){
    for(let j=0;j<4;j++){
        totalAno += matriz[i][j]
    }
}
console.log(`Total vendido no ano R$ ${totalAno.toFixed(2)}`)

function principal(){
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    let matriz = []

    // transforme os códigos acima em 4 funções e chame-as aqui
    // utilize passagem de parâmetros
}
principal()