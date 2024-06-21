const express = require("express");
const { applyAsDoctor } = require("../controllers/doctorsControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/apply", auth, applyAsDoctor);

module.exports = router;
