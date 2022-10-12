const jwt = require("jsonwebtoken");
const md5 = require("md5");

//Generate JWT Token
exports.getjwt = async (req, res) => {
  try {
    username = md5(req.body.username)
    const jwtToken = jwt.sign(username, process.env.JWT_SECRET);
    res.status(200).cookie("jwtToken", jwtToken, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true
    }).json({ msg: "JWT Generated", jwtToken });
  } catch (error) {
    res.send("An error occured while generating JWT");
    console.log(error);
  }
}