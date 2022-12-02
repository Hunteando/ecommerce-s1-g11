const upload = require('../config/multer')
const {
  createProduct,
  getAllProducts,
  uploadImages,
} = require('../controllers/product')
const { validateProduct } = require('../middlewares/validators')

const productRouter = require('express').Router()

// productRouter.post('/dashboard/admin', validateProduct, createProduct)
productRouter.post('/dashboard/admin', upload.array('image'), uploadImages)
productRouter.get('/dashboard/admin', getAllProducts)

module.exports = productRouter
