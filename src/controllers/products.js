const product = require("../models/Product");

const controller = {
  //Obtener Lista entera de los productos
  getALLProducts: (req, res) => {
    product
      .find({ isdeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  },
  //Obtener un Producto por id
  getProductByPk: (req, res) => {
    product
      .findById(req.params.id)
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  },
  //crear producto
  createProduct: (req, res) => {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      description: req.body.description,
    };

    product
      .create(newProduct)
      .then((data) => res.status(201).json({ msg: "Product added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
    console.log(newProduct);
  },

  removeProduct: (req, res) => {},
  //Modificar un Producto por id
  updateProduct: (req, res) => {},
};

module.exports = controller;
