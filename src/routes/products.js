const router = require('express').Router();
const productController = require('../controllers/products');

router.get('/', productController.getALLProducts)
router.get('/:id', productController.getProductByPk)
router.post('/create', productController.createProduct)
router.delete('/delete/:id', productController.removeProduct)
router.patch('/update/:id', productController.updateProduct) //put(completo) o path(una parte)

module.exports = router;

