const express = require("express");
const productsControllers = require("../controllers/products.controllers");
const router = express.Router();

// Formulario de creacion
router.get("/new", productsControllers.newForm);

module.exports = router;
