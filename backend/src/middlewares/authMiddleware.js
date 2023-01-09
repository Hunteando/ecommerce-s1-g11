const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/environment')

function authValidation(req, res, next) {
  const bearer = req.headers.authorization

  if (bearer && bearer.startsWith('Bearer')) {
    const [, token] = bearer.split('Bearer ')

    if (token) {
      try {
        const decoded = jwt.verify(token, jwtSecret)

        console.log(decoded)

        req.user = decoded

        return next()
      } catch ({ message, name }) {
        return res.status(403).json({
          error: true,
          message,
          type: name,
        })
      }
    }
  }

  return res.status(403).json({
    error: true,
    message: 'Insufficient permissions',
  })
}

function adminValidation(req, res, next) {
  if (req.user.role === 'admin') {
    return next()
  } else {
    return res.status(403).json({
      error: true,
      message: 'Insufficient permissions',
    })
  }
}
function userValidation(req, res, next) {
  if (req.user.role === 'user') {
    return next()
  } else {
    return res.status(403).json({
      error: true,
      message: 'Insufficient permissions',
    })
  }
}

function authMiddleware(type) {
  let middlewares
  if (type === 'user') {
    middlewares = [authValidation, userValidation]
  } else if (type === 'admin') {
    middlewares = [authValidation, adminValidation]
  } else {
    middlewares = []
  }

  return middlewares
}

module.exports = authMiddleware
