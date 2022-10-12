const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { jwtToken } = req.cookies;
    if (!jwtToken) {
      return res.status(406).json({ mgs: "Please generate JWT first, jwt token not found" })
    }
    const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);
    // req.user = await User.findById(decode._id)
    next();
  } catch (err) {
    console.log("err")
    res.send(err)
  }
};