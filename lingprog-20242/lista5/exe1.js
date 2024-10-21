let alunos = [
    {nome: "Paulo", idade:17, nota: 8.5},
    {nome: "Pedro", idade:18, nota: 8.0},
    {nome: "Julio", idade:19, nota: 9.5},
    {nome: "Maria", idade:20, nota: 9.0},
    {nome: "Carlos", idade:21, nota: 7.5},
]

console.log(`Lista de todos os alunos`)
for(let i=0;i<alunos.length;i++){
    console.log(`Nome: ${alunos[i].nome} e a nota: ${alunos[i].nota}`)
}

console.log(`Aluno com a maior nota`)
let objMaiorNota = alunos[0]
for(let i=0;i<alunos.length;i++){
    if (alunos[i].nota > objMaiorNota.nota){
        objMaiorNota = alunos[i]
    }
}
console.log(objMaiorNota)

console.log(`A média de notas de todos os alunos é`)
let soma = 0
for(let i=0;i<alunos.length;i++){
    soma += alunos[i].nota
}
console.log(soma/alunos.length)