/* 
FUNCIONES
*/

/* function darLaBienvenida(){
    return 'Bienvenido';
} */

// Etapa de definicion
function darLaBienvenida() {
  console.log("Bienvenido vistante");
}

// INVOCAR!!!!
/* darLaBienvenida();
darLaBienvenida();
darLaBienvenida();
darLaBienvenida();
darLaBienvenida(); */

// INVOCAR ITERANDO
/* for (let i = 0; i < 2; i++) {
  darLaBienvenida();
} */

//  2.0
function darLaBienvenidaV2(nombre = "invitado") {
  console.log("Saludos! " + nombre);
}

// darLaBienvenidaV2("Sofia");
// darLaBienvenidaV2();

// 3.0
function darLaBienvenidaV3(nombre = "invitado", perfil) {
  if (perfil == "gamer") {
    console.log(
      "Saludos! " + nombre + " te ofrecemos los mejores descuentos en gamepass"
    );
  } else if (perfil == "otaku") {
    console.log(
      "Saludos! " + nombre + " no te pierdas lo nuevo en crunchy roll"
    );
  } else {
    console.log("Saludos! " + nombre + ", vamos a aprender Javascript!!");
  }
}

// darLaBienvenidaV3();
// darLaBienvenidaV3("Miguel", "otaku");
// darLaBienvenidaV3("Lucas", "gamer");

/* 
function darLaBienvenida() {
  console.log("Bienvenido vistante");
} a Arrow Function
*/
let darLaBienvenidaFlecha = () => console.log("Bienvenido visitante");

/* 
function darLaBienvenidaV2(nombre = "invitado") {
  console.log("Saludos! " + nombre);
} a Arrow Function
*/
let darLaBienvenidaFlechaV2 = (nombre = "invitado") =>
  console.log("Saludos! " + nombre);
/* 
function darLaBienvenidaV3(nombre = "invitado", perfil) {
    if (perfil == "gamer") {
      console.log(
        "Saludos! " + nombre + " te ofrecemos los mejores descuentos en gamepass"
      );
    } else if (perfil == "otaku") {
      console.log(
        "Saludos! " + nombre + " no te pierdas lo nuevo en crunchy roll"
      );
    } else {
      console.log("Saludos! " + nombre + ", vamos a aprender Javascript!!");
    }
  } a Arrow Function
    */

let darLaBienvenidaFlechaV3 = (nombre = "invitado", perfil) => {
  switch (perfil) {
    case "gamer":
      console.log(
        "Saludos! " +
          nombre +
          " te ofrecemos los mejores descuentos en gamepass"
      );
      break;
    case "otaku":
      console.log(
        "Saludos! " + nombre + " no te pierdas lo nuevo en crunchy roll"
      );
      break;
    default:
      console.log("Saludos! " + nombre + ", vamos a aprender Javascript!!");
      break;
  }
};

darLaBienvenidaV3("lucas", "gamer");
