function calcularImc(){
    // recupera os dados do usuário
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    // calcula o imc
    let imc = peso / Math.pow(altura, 2) // potência

    // mostra o imc ao usuário no parágrafo com id=imc
    document.getElementById("imc").innerHTML = 
        `Seu imc é ${imc.toFixed(2)}`

}