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

    /*    product.findById('633a35c770129744dc8f5088', (err, data) => {
        if(err){
          console.log(err)
        } else {
          console.log(data)
        }
      }) */
    console.log(req.params.id);
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
  //Borrado logico a traves de isDeleted
  removeProduct: (req, res) => {
    product
      .findByIdAndUpdate(req.params.id, {
        isdeleted: true,
      })
      .then((data) => res.status(204).json({ msg: "Product deleted:", data }))
      .catch((err) => res.status(404).json({ msg: `Error: ${err}` }));
  },
  //Modificar un Producto por id
  updateProduct: (req, res) => {

    const productID = req.params.id

/*     product
      .findByIdAndUpdate(productID, {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description
      })
      .then((data) => res.status(201).json({ msg: "Product updated:", data }))
      .catch((err) => res.status(400).json({ msg: `Error: ${err}` })); */
    },
};

module.exports = controller;
