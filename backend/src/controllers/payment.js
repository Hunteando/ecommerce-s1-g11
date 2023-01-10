class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }
  async getPaymentLink(req, res) {
    try {
      const payment = await this.subscriptionService.createPayment(req);
      return res.json(payment);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: true, msg: "Fallo al realizar el pago" });
    }
  }
}

module.exports = PaymentController;
