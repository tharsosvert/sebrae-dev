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