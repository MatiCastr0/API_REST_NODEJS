const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validatorLogin, validatorRegister } = require("../validators/auth");
const { matchedData } = require("express-validator");
//TODO http://localhost.3000/api/auth/login
//TODO http://localhost.3000/api/auth/register

/**
 * http://localhost:3000/api
 *
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usuario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                       schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *              '201':
 *                  description: Usuario registrado de manera correcta
 *              '403':
 *                  description: Error por validacion de usuario
 */
router.post("/register", validatorRegister, registerCtrl);

//Login Usuario
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
