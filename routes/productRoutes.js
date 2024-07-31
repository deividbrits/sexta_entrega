const express = require ('express');
const producController = require ('../controller/productController')

const productRouter = express.Router ()

productRouter.post('/create',producController.addCafe)
productRouter.get('/readall',producController.getAllCafe )
productRouter.get('/readone/:id',producController.getCafeById)
productRouter.put('/update/:id',producController.updateCafeById)
productRouter.delete('/delete/:id',producController.deleteCafeById)

module.exports = productRouter ;