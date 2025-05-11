const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  // console.log(token)
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    // const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = token;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};


