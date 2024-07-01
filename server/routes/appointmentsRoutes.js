const express = require("express");
const {
  bookappointment,
  getallappointments,
  personalAppointments,
} = require("../controllers/appointmentsController");
const auth = require("../middleware/auth");

const router = express.Router();

router
  .post("/", auth, bookappointment)
  .get("/", auth, getallappointments)
  .get("/:id", auth, personalAppointments);

module.exports = router;
