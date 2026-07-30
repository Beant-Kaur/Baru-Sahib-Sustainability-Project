const express = require("express");

const router = express.Router();

const {registerPartner,} = require("../controllers/partnerController");

router.post("/register", registerPartner);

module.exports = router;
