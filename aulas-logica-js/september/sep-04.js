// let x = 10
// let y = 15

temperatura1 = 30 
temperatura2 = 40

// function somar (){
//     x = 20
//     console.log("Soma A: " + (x + y))
// }

// if ("Andre" == "Andre"){
//     console.log("Soma B: " + (x + y))
// }

// console.log("Soma C: " + (x + y))
// somar()

//example2
// function ajustTemp(temp){
//     let tempAjust
//     tempAjust = temp + 3
//     //console.log("Temperatura ajustada: " + (tempAjust))
//     return tempAjust
// }

// let variavel = ajustTemp(25)

// ajustTemp(temperatura1);
// ajustTemp(temperatura2);

// console.log("variável ajustar Temp: " + variavel)

//example3

// let ajustarTemp = (temp) =>{
//     let tempAjust = temp +3
//     return tempAjust
// }

// ou 

let ajustTemp = (temp) => {let tempAjust = temp +3; return tempAjust /*ou trocar a chave inteira por return temp+3*/}

let variavel = ajustTemp(25)

ajustTemp(temperatura1);
ajustTemp(temperatura2);

console.log("variável ajustar Temp: " + variavel)