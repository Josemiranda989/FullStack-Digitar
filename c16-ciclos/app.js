let readline = require("readline-sync");

/* Que son los bucles
Son estructuras que nos permiten ejecutar multiples veces bajo una condicion o una x cantidad de veces.
WHILE
DO WHILE
FOR
*/

/*  WHILE = Evalua una condicion y si ésta es verdadera ejecuta el bloque de código, hasta que la condicion sea false */

/* let num1 = 10;
while (num1 <= 5) {
    console.log('Soy el número:' + num1);
    num1 = num1 + 1;
}

console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------'); */

/* DO WHILE = Ejecuta el bloque de código por primera vez, luego evalua una condicion y si ésta es verdadera ejecuta el bloque de código nuevamente, hasta que la condicion sea false */
/* let num2 = 10;
do {
    console.log('Soy el número:' + num2);
    num2 = num2 + 1;
} while (num2 <= 5); */

/* MemoAPP 
let opcion = "";
let nombre = "";

while (opcion != 3) {
  console.log("MemoApp");
  console.log("Escoger entre estas tres opciones (1-2-3)");
  console.log("1: Escribe tu nombre");
  console.log("2: Mostrar tu nombre");
  console.log("3: Salir");

  opcion = readline.questionInt("Elige una opcion: ");
  console.log("🚀 ~ opcion typeOf:", typeof opcion);
  console.log("🚀 ~ opcion:", opcion);

  switch (opcion) {
    case 1:
      nombre = readline.question("Ingresa tu nombre: ");
      console.log("Tu nombre se guardó correctamente");
      break;
    case 2:
      if (nombre == "") {
        console.log("Debes ingresar un nombre en la opción 1");
      }
      console.log("Tu nombre es: " + nombre);
      break;
    case 3:
      console.log(
        "Muchas gracias por utilzar la app que te pide el nombre y te lo recuerda"
      );
      break;
    default:
      console.log("Debes escoger 1, 2 o 3");
  }
}
*/

/* FOR = Nos permite ejecutar codigo si cumple una determinada condición */

/* 
Bucle for sencillo
for (let i = 1; i <= 5; i++) {
    console.log('Holaa soy el indice ' + i);
} */

// Array de personajes
/* const personajesNaruto = [
  {
    nombre: "Naruto Uzumaki",
    edad: 17,
    aldea: "Konoha",
    habilidades: ["Rasengan", "Shadow Clone Jutsu", "Sage Mode"],
    rango: "Hokage",
  },
  {
    nombre: "Sasuke Uchiha",
    edad: 17,
    aldea: "Konoha",
    habilidades: ["Sharingan", "Chidori", "Amaterasu"],
    rango: "Ninja Renegado",
  },
  {
    nombre: "Sakura Haruno",
    edad: 17,
    aldea: "Konoha",
    habilidades: [
      "Chakra Enhanced Strength",
      "Medical Ninjutsu",
      "Summoning Jutsu",
    ],
    rango: "Jounin",
  }
]; */

// console.log(personajesNaruto.length); //Cantidad de personajes del array


// Impresora de personajes
/* for (let i = 0; i < personajesNaruto.length; i++) {
//   console.log(`Aqui i vale: ${i}`);
  console.log(`El personaje es ${personajesNaruto[i].nombre}`);
} */

/* // Impresora de personajes dinamico
let numPersonajes = readline.questionInt(`Ingrese la cantidad de personajes que quieres ver del 1 al ${personajesNaruto.length}`)

// Imprimir el Nombre y el Rango de cada personaje del listado
for (let i = 0; i < numPersonajes; i++) {
    //   console.log(`Aqui i vale: ${i}`);
      console.log(`El personaje es ${personajesNaruto[i].nombre}`);
    } */


/* EsParApp */
let numerico = readline.questionInt('Elegi el numero que queres validar: ')
let pares = [];
let totalPares= 0;

let impares = [];
let totalImpares =0;

for (let i = 1; i <= numerico; i++) {
   
    if (i%2 ==0) {
    console.log(`Es par y el valor es ${i}`);
    totalPares += i
    pares.push(i)
    } else {
    console.log(`Es impar y el valor es ${i}`);
    totalImpares += i
    impares.push(i)
    }
}

console.log("🚀 ~ pares:", pares)
console.log("🚀 ~ longitud:", pares.length)
console.log("🚀 ~ impares:", impares)
console.log("🚀 ~ longitud:", impares.length)
console.log("🚀 ~ totalPares:", totalPares)
console.log("🚀 ~ totalImpares:", totalImpares)