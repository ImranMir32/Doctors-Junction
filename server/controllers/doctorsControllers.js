const Doctors = require("../models/doctors.model");
const Users = require("../models/users.model");

const getApplicantdoctors = async (req, res) => {
  try {
    console.log("Fetching applicants", req.locals);

    const docs = await Doctors.find({ isDoctor: false })
      .find({
        _id: { $ne: req.locals },
      })
      .populate("userId");

    console.log("Applicants fetched successfully", docs);
    return res.send(docs);
  } catch (error) {
    console.error("Error fetching applicants:", error);
    return res.status(500).send(`Unable to get non-doctors: ${error.message}`);
  }
};

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

const acceptdoctor = async (req, res) => {
  try {
    console.log("->", req.params.id);
    const user = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { isDoctor: true, status: "accepted" }
    );

    const doctor = await Doctors.findOneAndUpdate(
      { userId: req.params.id },
      { isDoctor: true }
    );

    // const notification = await Notification({
    //   userId: req.params.id,
    //   content: `Congratulations, Your application has been accepted.`,
    // });

    // await notification.save();
    console.log("accpted");
    return res.status(201).send("Application accepted notification sent");
  } catch (error) {
    res.status(500).send("Error while sending notification");
  }
};

const rejectdoctor = async (req, res) => {
  try {
    const details = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { isDoctor: false, status: "rejected" }
    );
    const delDoc = await Doctors.findOneAndDelete({ userId: req.params.id });

    // const notification = await Notification({
    //   userId:  req.params.id,
    //   content: `Sorry, Your application has been rejected.`,
    // });

    // await notification.save();

    return res.status(201).send("Application rejection notification sent");
  } catch (error) {
    res.status(500).send("Error while rejecting application");
  }
};

module.exports = {
  applyAsDoctor,
  getApplicantdoctors,
  acceptdoctor,
  rejectdoctor,
};
