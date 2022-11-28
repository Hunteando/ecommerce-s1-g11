const { createProduct, getAllProducts } = require('../controllers/product')
const { validateProduct } = require('../middlewares/validators')

const productRouter = require('express').Router()

productRouter.post('/dashboard/admin', validateProduct, createProduct)
productRouter.get('/dashboard/admin', getAllProducts)

module.exports = productRouter
