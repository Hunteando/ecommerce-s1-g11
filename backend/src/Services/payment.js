const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const { PATH_FRONT, ACCESS_TOKEN_MP } = process.env;

class PaymentService {
  async createPayment(req) {
    console.log("req.idOrder", req.idOrder);
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      items: req.productos?.map((p) => ({
        title: p.title,
        description: req.idOrder,
        picture_url: p.picture_url,
        category_id: p.category_id,
        quantity: p.quantity,
        unit_price: parseInt(p.unit_price),
      })),
      back_urls: {
        failure: `${PATH_FRONT}/checkout/cancel`,
        pending: `${PATH_FRONT}/checkout/pending`,
        success: `${PATH_FRONT}/checkout/confirmation`,
      },
      payment_methods: {
        excluded_payment_types: [
          {
            // id: "ticket",
          },
        ],
      },
    };

    try {
      const payment = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN_MP}`,
        },
      });
      return payment.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PaymentService;
