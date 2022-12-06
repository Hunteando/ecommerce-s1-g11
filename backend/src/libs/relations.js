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

Product.hasMany(Image, {
  onDelete: 'CASCADE',
})
Image.belongsTo(Product, {
  onDelete: 'CASCADE',
})
UserDetails.hasOne(TypeDocument,{
  onDelete: 'CASCADE',
})
TypeDocument.belongsTo(UserDetails,{
  onDelete: 'CASCADE',
})

/////////////////////////////////////////////////////////////

UserDetails.hasMany(Telephones,{

})
Telephones.belongsTo(UserDetails,{

})

/////////////////////////////////////////////////////////////

UserDetails.hasMany(Addres,{

})
Addres.belongsTo(UserDetails,{

})


/////////////////////////////////////////////////////////////

UserDetails.hasOne(Reviews,{

})
Reviews.belongsTo(UserDetails,{

})

/////////////////////////////////////////////////////////////

UserDetails.hasOne(Cart,{

})
Cart.belongsTo(UserDetails,{

})

/////////////////////////////////////////////////////////////

Addres.hasOne(OrderSummary,{

})
OrderSummary.belongsTo(Addres,{

})

/////////////////////////////////////////////////////////////

Products.hasOne(Reviews,{

})
Reviews.belongsTo(Products,{

})

/////////////////////////////////////////////////////////////

Categorys.hasMany(Products,{

})
Products.belongsTo(Categorys,{ //PREGUNTAR LA RELACION!! DUDA

})

/////////////////////////////////////////////////////////////

Cart.hasOne(OrderSummary,{
  
  
})

OrderSummary.belongsTo(Cart,{ //DUDA EN LA RELACION! 

}) 