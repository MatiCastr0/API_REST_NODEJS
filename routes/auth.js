const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validatorLogin, validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");
//TODO http://localhost.3000/api/auth/login
//TODO http://localhost.3000/api/auth/register

//Registrar Usuario
router.post("/register", validatorRegister, registerCtrl);

//Login Usuario
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
