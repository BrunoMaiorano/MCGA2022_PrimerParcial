const product = require("../models/Product");

const controller = {
  //Obtener Lista entera de los productos
  getALLProduct: (req, res) => {
    console.log('todos los productos')
  },
  //Obtener un Producto por id
  getProductByPk: (req, res) => {
    res.send('un producto por id: ' + req)
  },
  //crear producto
  createProduct: (req, res) => {},
  //eliminado logico de un producto por id
  removeProduct: (req, res) => {},
  //Modificar un Producto por id
  updateProduct: (req, res) => {},
};

module.exports = controller;
