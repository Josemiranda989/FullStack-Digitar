const express = require("express");
const { home, detailMovie, newMovie, updateMovie, processCreate } = require("../controllers/index.controller");
const router = express.Router();

// Vista home
router.get("/", home);
// Vista detail
router.get("/detail/:id", detailMovie );
// Vista new movie
router.get("/new", newMovie );
// Proceso de guardado de una pelicula
router.post("/create", processCreate)
// Vista update movie
router.get("/update/:id", updateMovie);


module.exports = router;
