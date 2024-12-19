const express = require("express");
const usersControllers = require("../controllers/users.controllers");
const router = express.Router();

// Vista del login
router.get("/login", usersControllers.getLogin);
// Vista del register
router.get("/register", usersControllers.getRegister);

module.exports = router;
