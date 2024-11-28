// Clase 13 - Variables y tipos de datos

/*
 Variables => cajitas donde almacenamos algún dato, pueden ser VAR, LET, CONST.
 */

// Tipos de datos con ejemplos
let saludo = "Hola, mundo"; // STRING - texto entre comillas simples, dobles o francesas

let numero = 42;

let decimal = 3.14;

let respuesta = true; // booleano, puede ser true o false

let indefinido; // undefined - una variable declarada sin valor.

let vacio = null; // una variable con valor vacio

let persona = {
  nombre: "Jose",
  edad: 35,
  peso: 85.5,
  tieneDeudas: true,
}; // Objetos se representan por las llaves, son clave y valor con los : y se separan por ,
// console.log(persona.peso);

let numerosDeLaSuerte = [
  1, 2, 6, 7, 9, 5, 7, 8, 4, 2, 5, 7, 8, 9, 4, 2, 1, 3, 5, 6, 7, 8, 5, 7, 3,
]; //Array de numeros
// console.log(numerosDeLaSuerte.length); //Total de elementos con .length
// console.log(numerosDeLaSuerte[4]); //Nos devuelve el 5to elemento del array indicandole su indice

let mezclado = [523, "Hola", "Nombre", [1, 5, 7, 8], { nombre: "Jose" }];

const clientes = [
    {
        id:1,
        nombre: "Jose",
        edad: 35,
      },
      {
        id:2,
        nombre: "Lucas",
        edad: 35,
      },
      {
        id:3,
        nombre: "Alejandro",
        edad: 35,
      },
]

// console.log(clientes[1]);
// console.log(clientes[1].nombre);

// Ejercicio #1
// Declarar 3 variables para almacenar marca, automatico (booleano), km y mostrar por consola los objetivos
let marca = "Ford";
let automatico = true;
let km = 10000;


// Ejercicio #2
// Reasignar los valores para representar otro auto, mostrar por consola.
km = 120000;
// console.log(km);
// console.log(`El auto es marca ${marca}, su caja es ${automatico}, y su km es ${km}`);
// console.log("El auto es marca " + marca + ", su caja es " + automatico + ", y su km es " + km);


//Ejercicio #3
// Declarar una constante de PI y mostrar por consola
const pi = 3.14;
// console.log(pi);
// console.log(`El valor de pi es ${pi}`);


// Ejercicio #4
// Crear un objeto de un auto, mostrar por consola marca
let auto = {
    marca : "Ford",
    automatico : true,
    km : 100
}
// console.log(`La marca más vendida es ${auto.marca}`);


// Ejercicio #5
// Crear un array de autos, mostrar por consola kms de cada uno, y... la longitud del listado de autos.

let autos = [
    {
        marca : "Ford",
        automatico : true,
        km : 5000
    },
    {
        marca : "Renault",
        automatico : true,
        km : 800000
    },
    {
        marca : "Fiat",
        automatico : true,
        km : 15000
    },
    {
        marca : "Chevrolet",
        automatico : true,
        km : 16000
    }, {
        marca : "Toyota",
        automatico : true,
        km : 88000
    }

]

console.log(`El primer auto es marca ${autos[0].marca} y contiene ${autos[0].km} kms, el segundo ${autos[1].marca} y contiene ${autos[1].km} kms y el tercero ${autos[2].marca} y contiene ${autos[2].km} kms`);


console.log(autos.length); //GallitaTieneHuevos
