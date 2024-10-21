const prompt = require('prompt-sync')()

// cria vetor de objetos
let clientes = [
    {nome: "Paulo", idade: 20, endereco: "Franca", cpf: "123.456"},
    {nome: "Pedro", idade: 18, endereco: "Ribeirão Preto", cpf: "456.789"},
    {nome: "Mateus", idade: 19, endereco: "Campinas", cpf: "012.345"},
]
console.log(clientes)

// exibir apenas os clientes com idade menor que 20
console.log(`Clientes com idade menor que 20`)
for(let i=0;i<clientes.length;i++){
    if (clientes[i].idade < 20){
        console.log(clientes[i])
    }
}
// inserir um novo cliente no vetor, com dados fornecidos pelo programador
clientes.push(
    {nome: "João", idade: 22, endereco: "Batatais", cpf: "234.567"}
)
console.log(clientes)
// inserir um novo cliente no vetor, com dados fornecidos pelo usuário
clientes.push({
    nome: prompt(`Informe nome do cliente`),
    idade: Number(prompt(`Informe idade do cliente`)),
    endereco: prompt(`Informe endereco`),
    cpf: prompt(`Informe cpf`)
}
)
console.log(clientes)
