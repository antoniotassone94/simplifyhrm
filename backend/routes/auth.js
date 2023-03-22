const express = require("express");
const router = express.Router();
const {login, registerCompanies, loginCompanies} = require("../controllers/auth.js");

router.post("/login", loginCompanies);

router.post("/register", registerCompanies);

module.exports = router;