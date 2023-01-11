class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }
  async getPaymentLink(req, res, next) {
    try {
      const payment = await this.subscriptionService.createPayment(req);
      req.payment = payment;
      next();
      // return res.json(payment);
    } catch (error) {
      console.log("algo error");
      return res
        .status(500)
        .json({ error: true, msg: "Fallo al realizar el pago" });
    }
  }
}

module.exports = PaymentController;
