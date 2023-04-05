const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage");
const { validatorGetItem } = require("../validators/tracks");
//TODO LOCALHOST/STORAGE

//Lista de Items
router.get("/", getItems);

//Crear item
router.post("/", uploadMiddleware.single("myfile"), createItem);

//Obtener detalle de item
router.get("/:id", validatorGetItem, getItem);

//Eliminar Item
router.delete("/:id", validatorGetItem, deleteItem);
module.exports = router;
