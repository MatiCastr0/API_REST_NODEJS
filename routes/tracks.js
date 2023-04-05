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
// TODO http://localhost/tracks GET, POST, PUT, DELETE

//Lista de Items
router.get("/", getItems);

//Obtener detalle de item
router.get("/:id", validatorGetItem, getItem);

//Crear Item
router.post("/", validatorCreateItem, createItem);

//Actualizar Item
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

//Eliminar Item
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
