const User = require('../models/users')
const UserDetails = require('../models/usersdetails')
const Product = require('../models/products')
const Image = require('../models/images')
UserDetails.hasOne(User, {
  onDelete: 'CASCADE',
})
User.belongsTo(UserDetails, {
  onDelete: 'CASCADE',
})

// Product.hasMany(Image, {
//   onDelete: 'CASCADE',
// })
// Image.belongsTo(Product, {
//   onDelete: 'CASCADE',
// })