const jwt = require("jsonwebtoken");
const JWT_SECRET = "sizning_majhurlik_kalitingiz"; // .env faylga qo'yish tavsiya qilinadi

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Token mavjud emas!" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token mavjud emas!" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Token noto‘g‘ri yoki muddati tugagan!" });
  }
};

module.exports = authenticate;
