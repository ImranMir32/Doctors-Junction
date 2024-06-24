const mongoose = require("mongoose");
// const { createTokenForUser } = require("../services/authentication");
// const { createHmac, randomBytes } = require("crypto");

const doctorsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Users",
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    specialist: {
      type: String,
      required: [true, "Please add your speciality"],
    },
    experience: {
      type: String,
      required: [true, "Please add experiences in years"],
    },
    fees: {
      type: String,
      required: [true, "Please add Consulting fees"],
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    salt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//
// doctorsSchema.pre("save", function (next) {
//   const user = this;
//   if (!user.isModified("password")) return;

//   const salt = randomBytes(16).toString();
//   const hashedPassword = createHmac("sha256", salt)
//     .update(user.password)
//     .digest("hex");

//   this.salt = salt;
//   this.password = hashedPassword;
//   next();
// });

// doctorsSchema.static("isPasswordMatched", async function (email, password) {
//   const user = await this.findOne({ email });
//   console.log("->", user);
//   if (!user) throw new Error("User not found!");

//   const salt = user.salt;
//   const hashedPassword = user.password;

//   const userProvidedHash = createHmac("sha256", salt)
//     .update(password)
//     .digest("hex");

//   if (hashedPassword !== userProvidedHash) {
//     return false;
//   }
//   return true;
// });

// doctorsSchema.static(
//   "matchPasswordAndCreateToken",
//   async function (email, password) {
//     const user = await this.findOne({ email });
//     console.log("->", user);
//     if (!user) throw new Error("User not found!");

//     const salt = user.salt;
//     const hashedPassword = user.password;

//     const userProvidedHash = createHmac("sha256", salt)
//       .update(password)
//       .digest("hex");

//     if (hashedPassword !== userProvidedHash) {
//       throw new Error("Incorrect Email or Password");
//     }
//     const token = createTokenForUser(user);
//     return { user, token };
//   }
// );

module.exports = mongoose.model("Doctors", doctorsSchema);
