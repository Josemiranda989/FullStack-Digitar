// window.addEventListener("load", () => {
//   alert("Se cargo correctamente");
// });

window.onload = () => {
  //   alert("Se cargo correctamente");

  const title = document.querySelector("h1");
  const message = document.querySelector("p");
  const link = document.querySelector("a");

  title.style.backgroundColor = "green";
  message.style.backgroundColor = "tomato";

  title.onclick = () => {
    console.log("Hiciste click en Express");
  };

  //   title.onmouseout = () => {
  //     console.log("Se ejecuta cuando salimos del elemento");
  //   };

  message.onmouseover = () => {
    console.log("Se ejecuta cuando el mouse pasa por el elemento");
  };

  link.onclick = (event) => {
    if (confirm("Quieres ver la publicidad?")) {
      event.preventDefault();
      document.querySelector("div").innerHTML = "Compra una Coca Cola al 2x1";
    }
  };
  //   console.log(title.innerHTML, message.innerHTML, link.innerHTML);
};
