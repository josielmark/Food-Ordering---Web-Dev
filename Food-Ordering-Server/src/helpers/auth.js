const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  console.log(token);
  jwt.verify(token, SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(401).json({ success: false, message: "Invalid token" });
    }
    next();
  });
};

module.exports = authenticate;
