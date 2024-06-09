const express = require("express");
const multer = require("multer");
const path = require("path");
const { userSignup, userSignin } = require("../controllers/usersControllers");
// const uploadSignin = multer().none(); when using form-data

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});
const upload = multer({ storage: storage });

// router.post("/signin",userSignin, userSignin); when using form-data
router
  .post("/signup", upload.single("image"), userSignup)
  .post("/signin", userSignin);

module.exports = router;
