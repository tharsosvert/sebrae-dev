//Q2
let qtdAlunos = Number(prompt("Qual a quantidade de alunos?"))
let nomeAlunoX = []
let notaAlunoX = []
let listAlunosX = []
let listAprovados = 0
let listReprovados = 0
let maiorNota = 0

for (let i = 0; i < qtdAlunos ; i++){
    nomeAlunoX[i] = prompt(`Qual o nome do ${i+1}º aluno?`)
    notaAlunoX[i] = Number(prompt(`Qual a nota do ${i+1}º aluno?`))

    if (notaAlunoX[i] >= 6){
        listAlunosX[i] = "Aprovado"
        listAprovados++;
    } else {
        listAlunosX[i] = "Reprovado"
        listReprovados++;
    }

    if (notaAlunoX[i] > maiorNota){
        maiorNota = notaAlunoX[i]
    }
}

console.log("\n ALUNOS/NOTAS (respectivamente) \n \n")
console.log("Nome dos Aluno(s): " + nomeAlunoX)
console.log("Nota dos Aluno(s): " + notaAlunoX)
console.log("Situação do Aluno: " + listAlunosX)

console.log("\n LISTA DE APROVAÇÃO (quantidade) \n \n")
console.log("Qtd. Aprovado(s): " + listAprovados)
console.log("Qtd. Reprovado(s): " + listReprovados)
console.log("Maior Nota: " + maiorNota)