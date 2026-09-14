//Firjan SENAI
//Avaliação de lógica de programação
//Thársos Lima Gonçalves Xavier Souza

alert("Questão 1 - Sistema de notas de uma turma (20 pontos)")
console.log("\n\nQuestão 1 - Sistema de notas de uma turma (20 pontos)\n\n")

let nota = []
let mediaAluno = []
let mediaTurma = 0
let qtdAProvados = 0
let qtdReprovados = 0

let qtdAlunos = Number(prompt("Digite a quantidade de alunos:"))

for (let i = 0; i < qtdAlunos ; i++){
    nota[i] = Number(prompt(`Digite a 1ª NOTA do ${i+1}º aluno:`))
    nota[i+1] = Number(prompt(`Digite a 2ª NOTA do ${i+1}º aluno:`))

    mediaAluno [i] = (nota[i] + nota[i+1])/2

    if(mediaAluno [i] >= 7){
        console.log("Aluno APROVADO")
        qtdAProvados++;
    } else {
        console.log("Aluno REPROVADO")
        qtdReprovados++;
    }

    mediaTurma += mediaAluno[i];
}

console.log(`Alunos Aprovados: ${qtdAProvados}`)
console.log(`Alunos Reprovados: ${qtdReprovados}`)
console.log("Média da Turma: " + mediaTurma/qtdAlunos)




alert("Questão 2 - Controle de estoque (20 pontos)")
console.log("\n\nQuestão 2 - Controle de estoque (20 pontos)\n\n")

let produtos = Number(prompt("Digite a quantidade de tipos de produtos existentes: "))
let nomeProduto = []
let qtdEstoque = []
let prodCritico = 0
let maiorEstoque = 0
let itensGeral = 0

for(i = 0 ; i < produtos ; i++){
    nomeProduto.push(prompt(`Digite o nome do ${i+1}º produto:`))

    let estoqueAtual = Number(prompt(`Digite a qtd. de ${nomeProduto[i]} em estoque:`))
    qtdEstoque.push(estoqueAtual)
    
    if (qtdEstoque[i] < 5){
        console.log(`O produto ${nomeProduto[i]} está em situação crítica\n\n`)
        prodCritico++;
        
    }
    
    if (qtdEstoque[i] > maiorEstoque){
        maiorEstoque = qtdEstoque[i]
    }

    itensGeral += estoqueAtual;
}

console.log("Relatório: \n")
console.log("Qtd. de Tipos de Produtos Existentes: " + produtos)
console.log("Qtd. de Itens de Todos Produtos Existentes: " + itensGeral)
console.log(`Qtd. de produtos em situação crítica: ${prodCritico}`)
console.log(`Maior Quantidade Estoque: ${maiorEstoque}`)


alert("Questão 3 - Sistema de vendas (20 pontos)")
console.log("\n\nQuestão 3 - Sistema de vendas (20 pontos)\n\n")

let valorVenda = []
let totalVendas = 0 
let maiorVenda = 0
let mediaVendas = 0
let maiores100 = 0

let qtdVendas = Number(prompt("Digite a quantidade de vendas realizadas: "))

for(i = 0 ; i < qtdVendas ; i++){
    valorVenda[i] = Number(prompt(`Digite o valor da ${i+1}ª venda: `))

    totalVendas += valorVenda[i];

    if (valorVenda > maiorVenda){
        maiorVenda = valorVenda
    }

valorVenda.sort()

    if  (valorVenda[i] > 100){
        maiores100++;
    }

}

mediaVendas = totalVendas/qtdVendas

console.log("\n\nRelatório do Dia: \n")
console.log(`Quantidade de vendas: ${qtdVendas}`)
console.log(`Total Vendido: ${totalVendas}`)
console.log(`Média das Vendas: ${mediaVendas}`)
console.log(`Maior Venda: ${valorVenda[valorVenda.length - 1]}`)
console.log(`Vendas acima de R$ 100: ${maiores100}`)




alert("Questão 4 – Temperaturas da semana (20 pontos)")
console.log("\n\nQuestão 4 – Temperaturas da semana (20 pontos)\n\n")

let temperaturas = []
let maior =  temperaturas = []
let menor = temperaturas = []
let soma = 0
let maior30 = 0

for (let i = 0; i <= 6 ; i++){
    temperaturas[i] = Number(prompt("Digite a temperatura: "))

    if(temperaturas[i]>maior){
        maior = temperaturas[i]
    }

    if(temperaturas[i]<menor){
        menor = temperaturas[i]
    }

    if(temperaturas[i]>30){
        maior30++;
        console.log("dia " + (i+1) + ", temperatura: " + temperaturas[i])
    }

    soma = soma + temperaturas[i]
}

let media = soma/temperaturas.length

console.log("A maior temperatura registrada foi " + maior)
console.log("A menor temperatura registrada foi " + menor)
console.log("A média de temperaturas registradas foi " + media)
console.log("A quantidade de dias com temperaturas maiores que 30 foi " + maior30)






alert("Questão 5 – Números pares e ímpares (20 pontos)")
console.log("\n\nQuestão 5 – Números pares e ímpares (20 pontos)\n\n")

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

console.log("Qtd de números pares: " + qtdPar)
console.log("Soma dos números pares: " + somaPares)
console.log("\n\nNúmeros digitados: " + numeros)