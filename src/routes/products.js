const router = require('express').Router();
const productController = require('../controllers/products');

router.get('/', productController.getALLProduct)
router.get('/:id', productController.getProductByPk)
router.post('/create', productController.createProduct)
router.delete('/delete', productController.removeProduct)
router.put('/update', productController.updateProduct)

module.exports = router;

