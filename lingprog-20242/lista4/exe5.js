let logica = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

let linguagem = ["C", "F", "H", "W", "T"]

for(let i=0;i<logica.length;i++){
    if (linguagem.indexOf(logica[i]) != -1){
        console.log(`O aluno ${logica[i]} faz as duas disciplinas`)
    }
}