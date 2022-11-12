const User = require('../models/users')
const UserDetails = require('../models/usersdetails')

UserDetails.hasOne(User, {
  onDelete: 'CASCADE',
})
User.belongsTo(UserDetails, {
  onDelete: 'CASCADE',
})
