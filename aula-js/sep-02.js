//let num = Number(prompt("Digite o número da tabuada que deseja"))

//console.log("Tabuada: " + num + "\n\n")

// for (let alfa = 1; alfa <= 10; alfa++){
//     for (let tabX = 1; tabX <= 10; tabX++){
//         //let resultado = tabX * alfa (calcular matriz)
//         //console.log(num + " x " + tabX + " = " + num * tabX)
//         console.log(`${alfa} x ${tabX} = ${alfa * tabX}`)
//     }
// }
/*SWITCH*/ 

let dia = Number(prompt("Digite o dia da semana (1-7"));

switch (dia) {
    case 1:
        console.log("Hoje é Domingo");
        break;
    case 2:
        console.log("Hoje é Segunda");
        break;
    case 3:
        console.log("Hoje é Terça");
        break;
    case 4:
        console.log("Hoje é Quarta");
        break;
    case 5:
        console.log("Hoje é Quinta");
        break;
    case 6:
        console.log("Hoje é Sexta");
        break;
    case 7:
        console.log("Hoje é Sábado");
        break;
    default:
        console.log("Dia inválido")
}
// example from web
//
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }