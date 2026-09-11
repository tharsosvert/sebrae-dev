// //RESOLUÇÃO
// let weekClima = [0] //[21, 19, 25, 30, 28, 23, 20] 
// let maiorTemp = weekClima[0]
// let menorTemp = weekClima[0]
// let mediaTemp = 0
// let somaTemp = 0
// let maiorTrinta = [0]

// for (let i = 0; i < 7 ; i++){
//     weekClima[i] = Number(prompt("Digite a temperatura de cada dia da semana uma por vez (7 ao todo)"))
// }
// // // while (weekClima)

// //VERIFICAR MEDIA DAS TEMPERATURAS
// for (let i = 0; i < weekClima.length ; i++){
//     somaTemp = somaTemp + weekClima[i]
//     mediaTemp = somaTemp / weekClima.length
// }

// //VERIFICAR TEMPERATURAS MAIORES QUE 30
// for (let i = 0; i < weekClima.length ; i++){
//     if (weekClima[i] > 30){
//         maiorTrinta[i] = weekClima[i]
//         diasTrinta++;
//     }
// }

// weekClima.sort()

// console.log(weekClima)
// console.log("menor temp "+ weekClima[0])
// console.log("temp media " + mediaTemp)
// console.log("maior temp " + weekClima[6])
// console.log("dias temp > 30 " + diasTrinta)
// // console.log("temps > 30" + maiorTrinta)


//CORREÇÃO
// let temperaturas = []
// let maior =  temperaturas = []
// let menor = temperaturas = []
// let soma = 0
// let maior30 = 0

// for (let i = 0; i <= 6 ; i++){
//     temperaturas[i] = Number(prompt("Digite"))

//     if(temperaturas[i]>maior){
//         maior = temperaturas[i]
//     }

//     if(temperaturas[i]<menor){
//         menor = temperaturas[i]
//     }

//     if(temperaturas[i]>30){
//         maior30++;
//         console.log("dia " + (i+1) + ", temperatura: " + temperaturas[i])
//     }

//     soma = soma + temperaturas[i]
// }

// let media = soma/temperaturas.length

// console.log("A maior temperatura registrada foi " + maior)
// console.log("A menor temperatura registrada foi " + menor)
// console.log("A média de temperaturas registradas foi " + media)
// console.log("A quantidade de dias com temperaturas maiores que 30 foi " + maior30)


//Q2
// let qtdAlunos = Number(prompt("Qual a quantidade de alunos?"))
// let nomeAlunoX = []
// let notaAlunoX = []
// let listAlunosX = []
// let listAprovados = 0
// let listReprovados = 0
// let maiorNota = 0

// for (let i = 0; i < qtdAlunos ; i++){
//     nomeAlunoX[i] = prompt(`Qual o nome do ${i+1}º aluno?`)
//     notaAlunoX[i] = Number(prompt(`Qual a nota do ${i+1}º aluno?`))

//     if (notaAlunoX[i] >= 6){
//         listAlunosX[i] = "Aprovado"
//         listAprovados++;
//     } else {
//         listAlunosX[i] = "Reprovado"
//         listReprovados++;
//     }

//     if (notaAlunoX[i] > maiorNota){
//         maiorNota = notaAlunoX[i]
//     }
// }

// console.log("\n ALUNOS/NOTAS (respectivamente) \n \n")
// console.log("Nome dos Aluno(s): " + nomeAlunoX)
// console.log("Nota dos Aluno(s): " + notaAlunoX)
// console.log("Situação do Aluno: " + listAlunosX)

// console.log("\n LISTA DE APROVAÇÃO (quantidade) \n \n")
// console.log("Qtd. Aprovado(s): " + listAprovados)
// console.log("Qtd. Reprovado(s): " + listReprovados)
// console.log("Maior Nota: " + maiorNota)

//Q3
let numeros = [] 
let qtdPar = 0
let somaPares = 0

for (let i = 0; i < 10 ; i++){
    numeros[i] = Number(prompt("Digite um número (10 ao todo)"))

    if(numeros[i] % 2 === 0){
        console.log("número par: " + numeros[i])
        qtdPar++;
        somaPares = somaPares + numeros[i]
    } else {
        console.log("número impar: " + numeros[i])
    }
}


console.log("qtd Pares: "+qtdPar)
console.log("soma Pares: "+somaPares)

console.log("vetor digitado: "+numeros)