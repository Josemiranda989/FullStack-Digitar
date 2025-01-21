const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const indexRoutes = require("./src/routers/index.routes");
const productsRoutes = require("./src/routers/products.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Para que nuestra app entienda lo que viene del Formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src", "public")));

app.use("/", indexRoutes);
app.use("/productos", productsRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
