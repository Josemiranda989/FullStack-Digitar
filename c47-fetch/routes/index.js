var express = require("express");
const { getHome } = require("../controllers/index.controller");
var router = express.Router();

/* GET home view */
router.get("/", getHome);

module.exports = router;
