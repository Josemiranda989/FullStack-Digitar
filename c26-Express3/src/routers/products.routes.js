const express = require("express");
const router = express.Router();
const {
  detail,
  create,
  store,
} = require("../controllers/products.controllers");

const upload = require("../middlewares/multerMiddleware");

// Vista de detalle de producto DINAMICA
router.get("/detalle/:id", detail);
// Vista de formulario de creacion
router.get("/crear", create);
// Proceso de creacion
router.post("/crear", upload.single("imagen"), store);

module.exports = router;
