var express = require("express");
const { login } = require("../controllers/users.controller");
var router = express.Router();

/* GET users listing. */
router.get("/login", login);

module.exports = router;
