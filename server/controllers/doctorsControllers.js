const Doctors = require("../models/doctors.model");

const applyAsDoctor = async (req, res) => {
  try {
    console.log(req.body);
    const isFound = await Doctors.findOne({ userId: req.locals });
    if (isFound) {
      return res.status(400).send("Application already exists");
    }

    const { description, specialist, experience, fees } = req.body;

    const newApplication = await Doctors.create({
      userId: req.locals,
      description,
      specialist,
      experience,
      fees,
    });
    console.log(newApplication);
    if (newApplication) {
      return res.status(201).json("Application submitted successfully");
    } else {
      return res.status(400).json("Doctor data is not valid!");
    }
  } catch (error) {
    res.status(500).send("Unable to submit application");
  }
};

module.exports = {
  applyAsDoctor,
};