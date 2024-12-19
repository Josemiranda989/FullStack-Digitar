// console.log("Hola"[1]);
function iniciales(nombre, apellido) {
  return nombre[0] + " " + apellido[0];
}
// console.log(iniciales("Marcos", "Miguel"));

function tarjetas(nombre, apellido, callback) {
  return "Invitado Especial: " + callback(nombre, apellido) + "!";
}

let lucas = tarjetas("Lucas", "Loano", iniciales);
let miguel = tarjetas("Miguel", "Mateo", iniciales);
let gabriel = tarjetas("Gabriel", "Figueroa", iniciales);

// console.log(lucas);
// console.log(miguel);
// console.log(gabriel);

let sumarNum = (n1, n2, callback) => {
  const total = n1 + n2;
  console.log("Generando el resultado de la suma...");

  //   Nos falta generar callback para mostar el resultado
  setTimeout(() => {
    callback(total);
  }, 2000);
};

let mostrarTotal = (total) => {
  console.log("El resultado de la suma es: " + total);
};

// sumarNum(5, 7, mostrarTotal);
// sumarNum(5, 5, mostrarTotal);
// sumarNum(5, 1, mostrarTotal);

let urlBase =
  "     https://articulo.mercadolibre.com.ar/SKU-1462548483-juego-bloques-para-armar-magneticos-barra-magnetic   ";

let edades = [1, 10, 100, 35, 20];

let mayores = edades.filter((edad) => edad > 50); //Devuelve un array
let mayor = edades.find((edad) => edad > 50); //Devuelve el elemento

// console.log(mayores);
// console.log(mayor);

/* REDUCE */

let sueldos = [1000, 2000, 500, 7600];

let total = sueldos.reduce((acumulador, sueldo, index) => {
  //   console.log(
  //     `Aca el acumulador vale ${acumulador}, el sueldo es ${sueldo} y estamos en la vuelta ${index}`
  //   );
  return acumulador + sueldo;
});

console.log(total);

// Array de los mejores juegos del año 2024
const mejoresJuegos2024 = [
  "Prince of Persia: The Lost Crown",
  "Tekken 8",
  "Mario vs. Donkey Kong",
  "Skull and Bones",
  "Final Fantasy 7 Rebirth",
  "Stellar Blade",
  "Senua's Saga: Hellblade 2",
];

// Mostrar los juegos en la consola
console.log(mejoresJuegos2024);
let mejoresJuegos2024Longitud = mejoresJuegos2024.map((juego) => juego.length);

console.log(mejoresJuegos2024Longitud);
