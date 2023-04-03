const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
/*
    Obtener lista de la base de datos!
*    @param{*} req
*    @param{*} req
*/
const getItems = async (req, res) => {
  const data = await storageModel.find({});
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
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
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
