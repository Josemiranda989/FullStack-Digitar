// alert("Bienvenido");
const nombreLogo = document.querySelector("header > p");
// console.log(nombreLogo.innerHTML);
// console.log(nombreLogo.textContent);

nombreLogo.style.color = "tomato";
nombreLogo.style.fontSize = "2rem";

if (nombreLogo.textContent == "Copiloto") {
  nombreLogo.innerHTML = "Chatgpt";
}

// Agregar la clase spacing al elemento header
const rpta = confirm("Te gustaria acomodar el header?");
if (rpta) {
  const header = document.querySelector("header");
  header.classList.add("spacing");
}

// Crear modal que pida nombre para saludarlo si lo ingresa sino que diga hola invitado
const nombre = prompt("Ingresa tu nombre");
const saludo = document.querySelector(".bienvenida");
// console.log(nombre);
// console.log(saludo);

if (typeof nombre == "string" && nombre != "" && nombre.length > 0) {
  saludo.innerHTML += ` ${nombre}`;
} else {
  saludo.innerHTML += ` Invitado`;
}

// Agregar estilos a cajas pares o impares
// const boxes = document.querySelectorAll(".boxes1 .box");
const boxes = document.querySelectorAll(".box");
boxes.forEach((box, index) => {
  if (index % 2 == 0) {
    box.style.backgroundColor = "grey";
  } else {
    box.style.backgroundColor = "lightblue";
  }
});

const contrasenia = "1234";

// Ocultar boxes2 si no conoce la contraseña
if (prompt("Ingrese la contraseña") == contrasenia) {
  document.querySelector(".boxes2").classList.remove("hidden");
}

alert("Todo se modifico con JAVASCRIPT");
