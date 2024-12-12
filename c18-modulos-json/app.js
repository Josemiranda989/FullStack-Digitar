const readline = require("readline-sync");
const calculadora = require("./modulos/calculadora.js");
const charlyDay = require("./modulos/charlyDay.js");
const miloDay = require("./modulos/miloDay.json");

/* let num1 = readline.questionInt("Ingrese el primer numero");
let num2 = readline.questionInt("Ingrese el segundo numero");

console.log(calculadora.sumar(num1, num2)); */

/* console.log(charlyDay[2]); //array de objetos
let charlyDayToJSON = JSON.stringify(charlyDay);
console.log(charlyDayToJSON[3]); //cadena de texto
let charlyDayReturnToJS = JSON.parse(charlyDayToJSON);
console.log(charlyDayReturnToJS[2]); //volvio a ser un array de objetos */

// console.log(charlyDay);
// console.log(charlyDay.length);
let ultimaCancion = charlyDay.pop();
// console.log(charlyDay);
// console.log(charlyDay.length);
// console.log("La ultima cancion", ultimaCancion);
charlyDay.push({
  titulo: "No Soy Eterno",
  album: "1 1 1",
  año: 2023,
  colaboracion: "Bizarrap",
});
// console.log(charlyDay);
// console.log(charlyDay.length);
if (charlyDay[4].titulo.includes("No Soy Eterno")) {
  console.log("Se encontró");
} else {
  console.log("No se encuentra");
}

let nombres = ["lucas", "eduardo", "mirna"];

console.log(nombres.includes("mirna"));
