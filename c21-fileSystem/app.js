const fileSystem = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// console.log(fileSystem);

// const saludo = fileSystem.readFileSync("./data/saludo.txt", "utf-8");
// console.log(saludo);

const productsJSON = fileSystem.readFileSync(
  path.join(__dirname, "./data/navidadDB.json"),
  "utf-8"
);
const productsJS = JSON.parse(productsJSON);

// console.log(productsJS);

// Traer los productos más economicos <100
const enOferta = productsJS.filter((prod) => prod.precio < 100);
// console.log(enOferta);

// Mostrar por consola el total de productos con cat Juguetes
const juguetes = productsJS.filter((prod) => {
  return prod.categoria == "Juguetes";
});
// console.log(juguetes.length);

// const enOfertaJSON = JSON.stringify(enOferta);
// fileSystem.writeFileSync("./data/enOferta.json", enOfertaJSON);

// fileSystem.mkdirSync("./test");

const newProd = {
  id: uuidv4(),
  nombre: "Rifle Hidrogel", //req.body.nombre
  categoria: "Juguetes",
  precio: 120,
  descuento: 0,
  stock: 20,
  url_imagen: "https://example.com/juegos_de_mesa.jpg",
};

productsJS.push(newProd);
// console.log(productsJS);

fileSystem.writeFileSync(
  path.join(__dirname, "/data/navidadDB.json"),
  JSON.stringify(productsJS, null, " ")
);

console.log(productsJS.length);
