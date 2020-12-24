const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
    },
    age: {
      type: String,
      trim: true,
      required: true,
    },
    medicalCondition: {
      type: ObjectId,
      trim: true,
      ref: "Medical",
      required: true,
    },
    userBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Person", personSchema);
