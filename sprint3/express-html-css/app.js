const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

// Recursos estaticos o publicos
app.use(express.static(path.join(__dirname, "public")));
// Vista del home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
// Vista login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
// Vista register
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});
// Vista new product
app.get("/new-product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-product.html"));
});

app.listen(port, () =>  console.log("Servidor corriendo en http://localhost:" + port));
