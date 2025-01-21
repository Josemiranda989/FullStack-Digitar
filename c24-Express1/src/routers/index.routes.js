const express = require("express");
const { home } = require("../controllers/index.controllers");
// const indexController = require("../controllers/index.controllers");
const router = express.Router();

router.get("/", home);
// router.get("/", indexController.home);

module.exports = router;
