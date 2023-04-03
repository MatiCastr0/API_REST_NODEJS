const { tracksModel } = require("../models");
/*
    Obtener lista de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};

/*
    Obtener un detalle de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const getItem = (req, res) => {};

/*
    Insertar un registro de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ data });
};
/*
    Actualizar un registro de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const updateItem = (req, res) => {};

/*
    Eliminar un registro de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, deleteItem, updateItem };
