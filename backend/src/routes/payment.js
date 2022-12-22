const express = require("express");
const axios = require("axios");
const paymentRouter = express.Router();

const PaymentController = require("../controllers/payment.js");
const PaymentService = require("../Services/payment.js");

const PaymentInstance = new PaymentController(new PaymentService());

const { ACCESS_TOKEN_MP } = process.env;

paymentRouter.get("/mercadopago", (req, res, next) => {
  //   console.log(req.body);
  PaymentInstance.getPaymentLink(req.body, res);
});

paymentRouter.post("/mercadopago/respuesta", (req, res) => {
  // const { data.id } = req.query
  res.status(200).send("ok");
  if (req.body.action === "payment.created") {
    const fetch = async (body) => {
      try {
        console.log(body.data.id);
        const infoPago = await axios.get(
          "https://api.mercadopago.com/v1/payments/" + body.data.id,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN_MP}`,
            },
          }
        );
        let estado = "";
        if (infoPago.data.status === "approved") {
          estado = "paid";
        } else if (infoPago.data.status === "pending") {
          estado = "pendiente";
        } else {
          estado = "cancel";
        }
        console.log("estado", estado);
        if (estado === "paid" || estado === "cancel") {
          const status = await statusOrderFunction(
            infoPago.data.additional_info.items[0].description,
            estado
          );
          console.log("status", status);
          if (estado === "paid") {
            paidEmail(
              infoPago.data.additional_info.items[0].description,
              "paid"
            );
          } else {
            paidEmail(
              infoPago.data.additional_info.items[0].description,
              "cancel"
            );
          }
        }
      } catch (error) {
        res.status(400).send("algo fallo");
      }
    };
    fetch(req.body).catch(function (e) {
      console.log(e);
    });
  } else {
    // console.log("body else");
    // console.log(req.body);
    // const fetch = async (body) => {
    //   try {
    //     console.log(body.id);
    //     const infoPago = await axios.get(
    //       "https://api.mercadopago.com/v1/payments/" + body.id
    //     );
    //     console.log(body.additional_info.items[0].id);
    //     console.log(body.status);
    //     // const status = await statusOrderFunction(
    //     //   body.additional_info.items[0].id,
    //     //   body.status
    //     // );
    //   } catch (error) {
    //     res.status(400).send("algo fallo");
    //   }
    // };
    // fetch(req.body)
    //   .then(function (value) {
    //     console.log(value); // "Success!"
    //     return value;
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });
  }
});

module.exports = paymentRouter;
