const express = require ('express');
const producController = require ('../controller/productController')

const productRouter = express.Router ()

productRouter.post('/create',producController.addCafe)
productRouter.get('/api/product/readall',producController.getAllCafe )
productRouter.get('/api/product/readone/:id',producController.getCafeById)
productRouter.put('/api/product/update/:id',producController.updateCafeById)
productRouter.delete('/api/product/delete/:id',producController.deleteCafeById)

module.exports = productRouter ;