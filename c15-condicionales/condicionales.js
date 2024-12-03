/* Condicionales
Nos van a servir para realizar acciones en base a una o más condiciones
Si se cumple una condicion ejecuto un bloque de codigo, sino ejecuto otro.
*/

let readline = require('readline-sync');

/* IF */
/* let nota = readline.questionInt('Ingrese la nota que obtuvo: ')
// console.log(typeof nota);

if (nota > 6) {
    console.log("Estas aprobado");
} else {
    console.log("Estas desaprobado 💔");
} */

/* ELSE IF */
/* let edad = readline.questionInt('Ingrese la edad del niño, adulto ')
let mensaje = '';
let colegio =undefined;
let asilo = undefined;
if (edad < 3){
    mensaje = 'Todavia usa pañales';    
} else if( (edad > 3) && (edad <= 5) ) {
    colegio = readline.question('Podrias ingresar tu colegio');
    mensaje = 'Usa pañales parcialmente';
    asilo='';
} else if (edad > 6 && edad <10){
    mensaje = 'Deberia dejar';
} else {
    asilo = readline.question('Ingresa el nombre de tu asilo');
    mensaje = 'No usa a menos que sea un anciano';
    colegio='';
}
console.log('Mensaje: ',mensaje);
console.log('Asilo: ', asilo);
console.log('Colegio: ', colegio);
 */
/* 
Necesitamos calcular el costo de una impresion por gramos (el usuario debe ingresar el valor) y retornar el resultado en base al precio del filamento, el tipo y multiplicarlo por 5  
*/

/* let precioFilamento = readline.questionInt("Ingrese el precio del filamento por kg: ")
let gramosDelObjeto = readline.questionInt("Ingrese los gramos de objeto que queremos imprimir: ")
let factorExterno = 5;

let resultado = (gramosDelObjeto * precioFilamento / 1000) * factorExterno;
console.log(`El precio final del producto es ${resultado}, teniendo en cuenta que el filamento cuesta ${precioFilamento} y los gramos del objeto son ${gramosDelObjeto}`); */

/* Ternario */

/* let esVegano = readline.question('Eres Vegano? Responder Si');
console.log('Como llega', esVegano);
esVegano = esVegano.toLowerCase()
console.log('Luego de convertirse', esVegano); */

// Condicion ? Se ejecuta si es true : Se ejecuta si es false
/* esVegano == 'si' ? console.log('Hamburguesa Not co') : console.log('Bigmac');     */

// let dia = readline.question('Ingrese el dia')
// dia = dia.toLowerCase()
let dia = readline.question('Ingrese el dia')

let toLower = dia.toLowerCase();
console.log("🚀 ~ toLower:", toLower)
let toLocalLower = dia.toLocaleLowerCase();
console.log("🚀 ~ toLocalLower:", toLocalLower)

/* switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Último día laboral");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
} */