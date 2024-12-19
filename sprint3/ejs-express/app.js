const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

const indexRouter = require("./routes/index.routes");
const usersRoutes = require("./routes/users.routes");

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Recursos estaticos o publicos
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRoutes);

// Vista new product
app.get("/new-product", (req, res) => {
  res.render("new-product.ejs");
});

app.listen(port, () =>
  console.log("Servidor corriendo en http://localhost:" + port)
);
