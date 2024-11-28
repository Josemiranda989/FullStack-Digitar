/* Operadores -> simbolos que realizan operaciones en una o mas variables */

let n1 = 10;
let n2 = 20;
let n3 = 23;
let n4 = "10";

/* Operadores Aritmeticos */
// Suma +
let sumatoria = 5 + 10;
// console.log(sumatoria);
// console.log(5 + 10);

// Resta -
let resta = n1 - n2
// console.log('El resultado de la resta es '  + resta)

// Multiplicacion *
let multiplicacion = n1 * n2;
// console.log('El resultado es ' + multiplicacion);

// Division /
let division = n2 / n1
// console.log('El resultado es ' + division);

// Modulo o resto %
let resto = n3 % 2
// console.log('El resultado es ' + resto);

// De incremento ++ o Decremento --
let contador = 1;
// console.log('contador, valor original', contador);
contador++
// console.log('contador, luego del incremento', contador);
contador--
contador--
// console.log('contador, luego de dos decrementos', contador);

/* Operadores de Comparacion */
// Igualdad simple
// console.log(n1 == n2);
// console.log(n1 == n4); //true

// console.log((n1 + n4)); //Ojo con los tipos de datos (1 number + 1  string = string concatenado)

// Igualdad estricta
// console.log(n1 === n2);
// console.log(n1 === n4); //false

// console.log(n1 + Number(n4) ); //Ojo con los tipos de datos (1 number + 1  string = string concatenado)

// Desigualdad simple
// console.log(n1 != n2); //true
// console.log(n1 != n4); //false

// Desigualdad estricta
// console.log(n1 !== n2); //true
//  console.log(n1 !== n4); //true

// Mayor que -- Menor que
// console.log(n1 > n2); //false
// console.log(n2 < n3); //true

// Mayor o igual que -- Menor o igual que
// console.log(n1 >= n4) // true
// console.log(n1 <= n2) // true

// Suma, Resta, multiplicacion, division con el simbolo += -= *= /=
// console.log(n1);
// n1 += 5
// n1 = n1 + 5
// console.log(n1);
// n1 -= 5
// console.log(n1);

/* Operadores Logicos */
// AND && -- OR || -- NOT !
// AND > Todo debe ser true para que devuelva true
// console.log((n1 < n2)&&(n1 <= n3)); // true && true => TRUE
// console.log((n1 > n2)&&(n1 <= n3)); // false && true => FALSE

// console.log((n1 > n2));
// console.log((n1 <= n3));
// console.log((n1 > n2)&&(n1 <= n3)); // false

// OR || Con que solo uno sea True devuelvee TRUE
// console.log((n1 > n2));
// console.log((n1 <= n3));
// console.log((n1 > n2)||(n1 <= n3)); // true

// NOT ! Con que solo uno sea True devuelvee TRUE
// console.log((n1 > n2));
// console.log(!(n1 <= n3));
// console.log((n1 > n2) || !(n1 <= n3)); // falso


let comparacion1 = (n1 > n2)
console.log(comparacion1);

let comparacion2 = !(n1 >= n3)
console.log(comparacion2);

let resultado = comparacion1 || comparacion2

if(resultado){
    console.log('El resultado es: ' + resultado + ' porque almenos una de las comparaciones devolvio true' );
    console.log('🙌🙌🙌🙌');
    
} else {
    console.log('El resultado es: ' + resultado +' porque una o mas comparaciones devolvio false');
    console.log('xxxxxxxxxxxxxxxxxxxxxxx');    
}






