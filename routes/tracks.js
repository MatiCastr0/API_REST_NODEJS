const express = require("express");
const router = express.Router();
const { customHeader } = require("../middleware/customHeader");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
// TODO http://localhost/tracks GET, POST, PUT, DELETE

//Lista de Items
router.get("/", authMiddleware, getItems);

//Obtener detalle de item
router.get("/:id", authMiddleware, validatorGetItem, getItem);

//Crear Item
router.post(
  "/",
  authMiddleware,
  checkRol(["user", "admin"]),
  validatorCreateItem,
  createItem
);

//Actualizar Item
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);

//Eliminar Item
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

module.exports = router;
