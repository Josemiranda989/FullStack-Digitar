const express = require("express");
const { detail } = require("../controllers/products.controllers");
const router = express.Router();

// Vista de detalle de producto DINAMICA
router.get("/detalle/:id", detail);
// Vista de formulario de creacion
// router.get("/create" /* AQUI VA LA FUNCION */);
// Proceso de creacion
// router.post("/create" /* AQUI VA LA FUNCION */);

module.exports = router;
