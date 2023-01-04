class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      // console.log(req);
      const payment = await this.subscriptionService.createPayment(req);
      return res.json(payment);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: true, msg: "Fallo al realizar el pago" });
    }
  }

  async getSubscriptionLink(req, res) {
    try {
      const subscription = await this.subscriptionService.createSubscription();

      return res.json(subscription);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Fallo al realizar la subscripción" });
    }
  }
}

module.exports = PaymentController;
