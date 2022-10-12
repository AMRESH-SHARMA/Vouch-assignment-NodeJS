const express = require("express");
const {getjwt } = require("../controllers/jwt.controller");

const router = express.Router();

router.route('/')
.get(function (req, res) {
    res.send("GET request called, connected  to cloud");
});

router.route("/getjwt").post(getjwt)

module.exports = router;
