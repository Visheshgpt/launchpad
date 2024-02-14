const { SiweMessage } = require("siwe");

module.exports.verifySignature = async (req, res, next) => {
  const { message, signature } = req.body;

  try {
    if (!message || !signature) {
      return res.status(500).send({
        msg: "data missing",
      });
    }

    const siweMessage = new SiweMessage(message);
    const fields = await siweMessage.verify({ signature });
    req.fields = fields

    if (fields.success) {
      next();
      return;
    }

    return res.status(500).send({
      msg: "invalid signature",
    });
  } catch (error) {
    return res.status(500).send({
      msg: error?.message,
    });
  }
};