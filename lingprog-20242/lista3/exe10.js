let somaPares = 0
let somaPrimos = 0
let numero = Number(prompt(`Informe um número`))
if (numero % 2 == 0) {
    somaPares += numero
}
let primo = true // assumo que o número é primo
let divisor = 2
while (divisor < numero){
    if (numero % divisor == 0){
        primo = false
        break // força saída do while
    }
    divisor++
}
if (primo && numero != 1 && numero != 0){
    somaPrimos += numero
}