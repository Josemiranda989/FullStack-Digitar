const express = require("express");
const {
  detail,
  create,
  store,
} = require("../controllers/products.controllers");
const router = express.Router();

// Vista de detalle de producto DINAMICA
router.get("/detalle/:id", detail);
// Vista de formulario de creacion
router.get("/crear", create);
// Proceso de creacion
router.post("/crear", store);

module.exports = router;
