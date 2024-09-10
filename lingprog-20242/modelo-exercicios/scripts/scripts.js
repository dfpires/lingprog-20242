function calcularImc(){
    // recupera os dados do usuário
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    // calcula o imc
    let imc = peso / Math.pow(altura, 2) // potência

    // mostra o imc ao usuário no parágrafo com id=imc
    document.getElementById("imc").innerHTML = 
        `Seu imc é ${imc.toFixed(2)}`

    let classificacao
    // calcular a classificação do IMC
    if (altura < 0 || peso < 0){
        classificacao = "Dados são inválidos"
    }
    else if (imc < 18.5){
        classificacao = "Baixo peso"
    }
    else if (imc >= 18.5 && imc <= 24.9){
        classificacao = "Peso normal"
    }
    else if (imc >= 25 && imc <= 29.9){
        classificacao = "Sobrepeso"
    }
    else if (imc >= 30 && imc <= 34.9){
        classificacao = "Obesidade grau I"
    }
    else if (imc >= 35 && imc <= 39.9){
        classificacao = "Obesidade grau II"
    }
    else {
        classificacao = "Obesidade grau III"
    }
    document.getElementById("classificacao").innerHTML = `A classificação do seu IMC é ${classificacao}`

}

function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let maior
    if (nro1 >= nro2 && nro1 >= nro3){
        maior = nro1
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        maior = nro2
    }
    else {
        maior = nro3
    }
    // mostrar ao usuário
    document.getElementById("maior").innerHTML = `O maior elemento é ${maior}`
}
function ordenar(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let maior, meio, menor
    if (nro1 >= nro2 && nro1 >= nro3){
        maior = nro1
        if (nro2 >= nro3){
            meio = nro2
            menor = nro3
        }
        else {
            meio = nro3
            menor = nro2
        }
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        maior = nro2
        if (nro1 >= nro3){
            meio = nro1
            menor = nro3
        }
        else {
            meio = nro3
            menor = nro1
        }
    }
    else {
        maior = nro3
        if (nro1 >= nro2){
            meio = nro1
            menor = nro2
        }
        else {
            meio = nro2
            menor = nro1
        }
    }
    document.getElementById("ordena").innerHTML = `Crescente: ${menor} ${meio} ${maior}`
}
function  exe5(){
    // recuperar os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
                break
        case 2: resultado = (nro1 >= nro2) ? nro1 - nro2 : nro2 - nro1
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: resultado = (nro2 != 0) ?  nro1 / nro2 : "divisão por zero"
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade >= 0 && idade < 20){
        if (peso >= 0 && peso < 60){
            risco = 9
        }
        else if (peso > 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else risco = "peso inválido"
    }
    else if (idade >= 20 && idade <= 50){
        if (peso >= 0 && peso < 60){
            risco = 6
        }
        else if (peso > 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else risco = "peso inválido"
    }
    else if (idade > 50){
        if (peso >= 0 && peso < 60){
            risco = 3
        }
        else if (peso > 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else risco = "peso inválido"
    }
    else {
        risco = "idade inválida"
    }
    document.getElementById("risco").innerHTML = risco
}