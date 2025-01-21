const fs = require("fs");
const path = require("path");

const bicisPath = path.join(__dirname, "..", "data", "bicis.json");

module.exports = {
  detail: (req, res) => {
    const bicis = JSON.parse(fs.readFileSync(bicisPath, "utf-8"));
    const biciSeleccionada = bicis.find((bici) => bici.id == req.params.id);
    if (biciSeleccionada) {
      res.render("products/detail", { biciSeleccionada });
    }
    res.send("La bici no existe");
  },
  create: (req, res) => {
    res.render("products/create");
  },
  store: (req, res) => {
    let bicis = JSON.parse(fs.readFileSync(bicisPath, "utf-8"));

    let nuevaBici = {
      id: bicis[bicis.length - 1].id + 1,
      nombre: req.body.nombre,
      marca: req.body.marca,
      precio: req.body.precio,
      imagen: req.body.image || "/images/default.png",
    };

    bicis.push(nuevaBici);

    fs.writeFileSync(bicisPath, JSON.stringify(bicis, null, " "));
    res.redirect("/");
  },
};
