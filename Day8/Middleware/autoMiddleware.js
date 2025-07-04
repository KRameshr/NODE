const { JsonWebTokenError } = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const autoHeader = req.header("Autorization");
    if (!autoHeader || !autoHeader.startWith("Bearer")) {
      return res.status(403).json({ message: "unauthoricaded acess" });
    }
    const token = autoHeader.replace("Bearer", "");
    const decode = JsonWebTokenError.verify(token, process.env.JWT_SECR);
    res.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports = auth;
