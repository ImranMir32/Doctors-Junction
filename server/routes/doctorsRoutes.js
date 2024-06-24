const express = require("express");
const {
  applyAsDoctor,
  getApplicantdoctors,
  acceptdoctor,
  rejectdoctor,
} = require("../controllers/doctorsControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router
  .post("/apply", auth, applyAsDoctor)
  .get("/applicant-doctors", auth, getApplicantdoctors)
  .put("/accept-doctor/:id", auth, acceptdoctor)
  .delete("/reject-doctor/:id", auth, rejectdoctor);

module.exports = router;
