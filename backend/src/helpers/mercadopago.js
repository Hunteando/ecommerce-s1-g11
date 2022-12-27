var mercadopago = require('mercadopago')
const { mercadoPago } = require('../config/environment')
mercadopago.configurations.setAccessToken(mercadoPago.mercadoPagoToken)

const createPayment = async (idUser, type) => {
  const data = await mercadopago.payment.create({
    transaction_amount: 100,
    description: 'Título del producto',
    payment_method_id: 'rapipago',
    payer: {
      email: 'test_user_3931694@testuser.com',
    },
  })
}
