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
};
