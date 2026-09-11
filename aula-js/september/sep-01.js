// // example01 - estrutura de repetição WHILE
// let numero = 1

// // while (numero <= 100){
// //     console.log("Número: " + numero)
// //     numero++;
// // }
// // example02 - estrutura de repetição DO / WHILE
// do {
//     console.log("Bloco DO / WHILE")
//     console.log("Número: " + numero)
//     numero++;
// } while (numero <= 100)
// example03 -me
// let nome = ""

// while (nome != "Joãozinho"){
//     nome = prompt("Digite o seu nome ")
//     if (nome == "Joãozinho"){
//         console.log("Parabéns, vc ganhou!")
//     }else{
//         console.log("Tente novamente")
//     }
// }
// example03 -teacher
// let nome = ""

// while (nome != "joaozinho"){
//     nome = prompt("Digite o seu nome")
//     if (nome=="joaozinho"){
//         console.log("Parabéns vc ganhou!")
//     }else{
//         console.log("Tente novamente")
//     }
// }
// example04
// let a = 5
// let b = 10
// let x = 0

// for (let cont = 1; cont <= 10; cont++){
//     x = x*a+b
//     console.log(x)
// }
// 
// ler  2 valores;
// result soma;
// fazer isso 4 vezes;
//
//Calculadora
// for (let i = 0; i <= 1; i++){
//     let a = Number(prompt("Digite A "))
//     let b = Number(prompt("Digite B "))
//     console.log("A soma é igual a " + (a + b))
// }

let task = 1;

while (task != 0){
    
    let a = Number(prompt("Digite A "))
    let b = Number(prompt("Digite B "))
    
    console.log("A soma é igual a " + (a + b))
    
    task = prompt("Digite 1 para continuar, 0 para sair")
}


//