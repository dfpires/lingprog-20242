let nomes = ["Paulo", "Pedro", "João", "José", "Mateus", "Marcos", "Jr"]
let notas = [8, 3, 6, 7, 9, 4, 5]
// calcula maior média
let maiorMedia = notas[0]
let nomeMaiorMedia = nomes[0]
for(let i=1;i<7;i++){
    if (notas[i] > maiorMedia){
        maiorMedia = notas[i]
        nomeMaiorMedia = nomes[i]
    }
}
console.log(`Aluno com maior média ${maiorMedia} é ${nomeMaiorMedia} `)
// calcula a nota necessário para a prova de exame
for(let i=0;i<7;i++){
    if (notas[i] < 7){
        console.log(`${nomes[i]} vai fazer exame final e precisa ${10 - notas[i]}`)
    }
}