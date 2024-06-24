const express = require("express");
const {
  applyAsDoctor,
  getApplicantdoctors,
} = require("../controllers/doctorsControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router
  .post("/apply", auth, applyAsDoctor)
  .get("/applicant-doctors", auth, getApplicantdoctors);

module.exports = router;
