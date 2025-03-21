const prompt = require('prompt-sync')()

function cadastraAluno(vetObj){
    vetObj.push({
        nome: prompt(`Informe nome do aluno`),
        idade: Number(prompt(`Informe a idade do aluno`)),
        nota: Number(prompt(`Informe a nota do aluno`))
    })
    console.log(`Aluno foi inserido com sucesso`)
}
function consultaAlunos(vetObj){
    console.log(`Lista de todos os alunos`)
    for(let i=0;i<vetObj.length;i++){
        console.log(`Nome: ${vetObj[i].nome} e a nota: ${vetObj[i].nota}`)
    }
}
function maiorNota(vetObj){
    console.log(`Aluno com a maior nota`)
    let objMaiorNota = vetObj[0]
    for(let i=0;i<vetObj.length;i++){
        if (vetObj[i].nota > objMaiorNota.nota){
            objMaiorNota = vetObj[i]
        }
    }
    console.log(objMaiorNota)
}

function mediaNotas(vetObj){
    console.log(`A média de notas de todos os alunos é`)
    let soma = 0
    for(let i=0;i<vetObj.length;i++){
        soma += vetObj[i].nota
    }
    console.log(soma/vetObj.length)
}

function principal(){
    // variável alunos tem escopo local - existe somente dentro da função principal
    let alunos = [
        {nome: "Paulo", idade:17, nota: 8.5},
        {nome: "Pedro", idade:18, nota: 8.0},
        {nome: "Julio", idade:19, nota: 9.5},
        {nome: "Maria", idade:20, nota: 9.0},
        {nome: "Carlos", idade:21, nota: 7.5},
    ]
    let opcao
    do {
        console.log(`Digite \n1. Cadastra aluno \n2. Consulta alunos \n3. Maior nota \n4. Média notas \n5.Sair`)
        opcao = Number(prompt()) 
        switch(opcao){
            case 1: cadastraAluno(alunos); break;
            case 2: consultaAlunos(alunos); break;
            case 3: maiorNota(alunos); break;
            case 4: mediaNotas(alunos); break;
            case 5: console.log(`Programa será encerrado`); break;
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

principal()



