const { cloudinary } = require('../config/cloudinary')
const fs = require('fs')
const Image = require('../models/images')
const Products = require('../models/products')

const createProduct = async (req, res) => {
  const {
    code,
    name,
    description,
    price,
    stock,
    colors,
    weight,
    freeshipping,
    averageRating,
    numOfReviews,
    url,
  } = req.body

  try {
    const product = await Products.create({
      code,
      name,
      description,
      price,
      stock,
      colors,
      weight,
      freeshipping,
      averageRating,
      numOfReviews,
    })
    const { id } = product.toJSON()
    await Image.create({ url, ProductId: id })

    return res.status(200).json({
      success: true,
      product,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    })
  }
}

const crearProducto = async (req, res, next) => {
  const { name, price, description, stock } = req.body
  let imagenes = []
  if (req.files.length) {
    for (let i = 0; i < req.files.length; i++) {
      imagenes.push(req.files[i].path)
    }
  }
  const producto = await Products.create({
    name,
    description,
    price,
    stock,
    image: imagenes,
  })
  const products = await Products.findAll({ include: { all: true } })
  res.status(200).json({ message: 'Product created', products })
}

const modificarProducto = async (req, res, next) => {
  const { id } = req.params
  let imagenesNuevas = []
  if (req.files.length) {
    for (let i = 0; i < req.files.length; i++) {
      imagenesNuevas.push(req.files[i].path)
    }
  }
  const producto = await Products.findByPk(id)
  const imagenesABorrar = req.body.imagenesABorrar?.split(',')
  let imagenesProducto = producto.image
  if (imagenesABorrar?.length) {
    for (let i = 0; i < imagenesABorrar?.length; i++) {
      const imagenBorrar = `${imagenesABorrar[i].split('/').reverse()[1]}/${
        imagenesABorrar[i].split('/').reverse()[0].split('.')[0]
      }`
      await cloudinary.uploader.destroy(`${imagenBorrar}`)
      imagenesProducto = imagenesProducto.filter((e) => {
        return `${e}` !== `${imagenesABorrar[i]}`
      })
    }
  }
  const productoNuevo = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    image: imagenesProducto.concat(imagenesNuevas),
  }
  await Products.update(productoNuevo, {
    where: {
      id,
    },
  })
  const products = await Products.findAll({ include: { all: true } })
  res.status(200).json({ mensaje: 'Modified product', products })
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({ include: { all: true } })

    return res.status(200).json({
      success: true,
      products,
    })
  } catch (error) {
    res.status(404).json({
      succes: false,
      message: error,
    })
  }
}
// middleware validar user es admin o no
// validar el usuario que inicia sesión sea el dueño del carrito con token
// agregar productos al carrito POST se envia(token id carrito) validar token
// modificar el carrito con verificación PUT envia(token)
// quitar produtos del carrito POST-PATCH envia(token)
// vaciar el carrito DELETE envia(token)
/*

export const verifySuperAdminPermission = (req, res, next) => {
    if(req.auth){const permissions = req.auth.permissions[0]
        console.log(permissions)
        permissions === 'SuperAdmin' ? next() : res.status(403).send('Not authorized'); }

}

export const verifyAdminOrSuperAdminPermission = (req, res, next) => {

        const permissions = req.auth.permissions[0]
    permissions === 'SuperAdmin' ? next() : permissions === 'Admin'? next() : res.status(403).send('Not authorized');

}
*/

const uploadImages = async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, 'Images')
  const urls = []
  const files = req.files
  if (req.method === 'POST') {
    for (const file of files) {
      const { path } = file
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }
    res.status(200).json({
      success: true,
      data: urls,
    })
  } else {
    res.status(405).json({
      success: false,
      message: 'Image not uploaded successfully',
    })
  }
  // INSERCIÓN A LA BASE DE DATOS
  // ACA VIENEN LAS URLS
  console.log(urls)
}
module.exports = {
  getAllProducts,
  createProduct,
  uploadImages,
  crearProducto,
  modificarProducto,
}
