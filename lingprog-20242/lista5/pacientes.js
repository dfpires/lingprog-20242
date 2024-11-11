function cadastra(vetor){
    vetor.push({
        nome: prompt(`Informe nome do paciente`),
        idade: Number(prompt(`Informe idade do paciente`)),
        peso: Number(prompt(`Informe peso do paciente`)),
        altura: Number(prompt(`Informe altura do paciente`)),
        condicao: prompt(`Informe condição do paciente - G(grave), M(moderada), L(leve)`).toUpperCase()
    })
}

function consulta(vetor){
    for(let i=0;i<vetor.length;i++){
        console.log(`Nome: ${vetor[i].nome} Idade: ${vetor[i].idade} Peso: ${vetor[i].peso} Altura: ${vetor[i].altura} Condição: ${vetor[i].condicao}`)
    }
}

function mediaIdades(vetor){
    let soma = 0
    for(let i=0;i<vetor.length;i++){
        soma += vetor[i].idade
    }
    console.log(`A média das idades é ${(soma/vetor.length).toFixed(2)}`)
}

function pacienteMaiorRisco(vetor) {
    console.log(`Paciente de maior risco:`);

    if (vetor.length === 0) {
        console.log("Nenhum paciente cadastrado.");
        return;
    }

    // Inicializa com o primeiro paciente como sendo o de maior risco
    let pacienteMaiorRisco = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        const pacienteAtual = vetor[i];

        // Verifica primeiro pela condição de saúde: grave > moderada > leve
        if ((pacienteAtual.condicao === "G" && pacienteMaiorRisco.condicao !== "G") ||
            (pacienteAtual.condicao === "M" && pacienteMaiorRisco.condicao === "L")) {
            pacienteMaiorRisco = pacienteAtual;
        } 
        else if (pacienteAtual.condicao === pacienteMaiorRisco.condicao) {
                // Se tiverem a mesma condição, verifica pela idade
                if (pacienteAtual.idade > pacienteMaiorRisco.idade) {
                    pacienteMaiorRisco = pacienteAtual;
                } 
                // Se tiverem a mesma condição e idade, verifica pelo peso
                else if (pacienteAtual.idade === pacienteMaiorRisco.idade && pacienteAtual.peso > pacienteMaiorRisco.peso) {
                    pacienteMaiorRisco = pacienteAtual;
                }
        }
    }

    console.log(`Nome: ${pacienteMaiorRisco.nome}, Idade: ${pacienteMaiorRisco.idade}, Peso: ${pacienteMaiorRisco.peso}, Condição: ${pacienteMaiorRisco.condicao}`);
}

function principal(){
    let pacientes = []
    cadastra(pacientes)
    consulta(pacientes)
    mediaIdades(pacientes)
    pacienteMaiorRisco(pacientes)
}