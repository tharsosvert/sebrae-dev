// let nomes = ["André", "Pedro", "Ana", "Maria", "João"]

// console.log("Seu nome é: " + nomes[0])
// console.log("Tamanho do vetor: " + nomes.length + "\n")
// console.log("Dado antes da mudança: " + nomes[2] + "\n")

// nomes[2] = "Letícia"
// console.log("Dado após a mudança: " + nomes[2])
// nomes.push("Mateus")
// console.log("Novo tamanho: " + nomes.length)
// console.log(nomes)

// nomes.pop() //remove o último 
// console.log(nomes)

// let numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// for (let i = 0 ; i < numeros.length ; i++){
//     numeros[i] = numeros[i] * 10;
//     console.log(numeros[i])
// }

// console.log("ordem orginal")
// console.log(numeros)

// numeros.sort()
// console.log("ordem crescente")
// console.log(numeros)

//EXERCÍRIOS A SEGUIR:

//exerc1
// let numConvert = Number(prompt("Digite um valor em metros")) //input em metros
// /*console.log*/alert("Valor em centímetros = " + numConvert*100)

//exerc2
// let valorProduto = Number(prompt("Qual o valor do produto?"))

// if (valorProduto > 100){
//     alert(valorProduto - valorProduto*0.10)
// } else {
//     alert(valorProduto - valorProduto*0.05)
// }

//exerc3 FOR para percorrer o VETOR 
//inicialmente com sort() e pegando o maior (que é o último) 
// let valores = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// let maiorVal = valores[0]
// let menorVal = valores[0]

// for (let i = 0; i < valores.length ; i++){
//     if (valores[i] > menorVal){
//         maiorVal = valores[i]
//     }
//     if (valores[i] < menorVal){
//         menorVal = valores[i]
//     }
// }
// console.log(maiorVal)
// console.log(menorVal)

//exerc4
let notas = [10, 9, 10, 8, 10, 10, 10, 10, 10, 10]
let media = 0

for (let i = 0; i < notas.length ; i++){
    media = media + notas[i]
}
console.log(media / notas.length)
