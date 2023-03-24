const express = require("express");
const router = express.Router();
const {login, registerCompanies, loginCompanies, modifyCompanies} = require("../controllers/auth.js");
const authenticateToken = require("../middlewares/auth.js")

router.post("/login", loginCompanies);

router.post("/register", registerCompanies);

router.patch("/modify", authenticateToken, modifyCompanies)

module.exports = router;