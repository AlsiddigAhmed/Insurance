const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SignUpSchema = new Schema({
  Firstname: { type: String, required: true, unique: false },
  Lastname: { type: String, required: true, unique: false },
  Name: { type: String, required: true, unique: true },
  Gender: { type: String, required: true },
  Birthday: { type: String, required: true },
  MemberSince: { type: Date, default: Date.now() },
  Country: { type: String, required: true },
  City: { type: String, required: true },
  Phone: { type: Number, required: true, unique: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true, unique: false }
});

// exporting the models
module.exports = {
  Account: model("Accounts", SignUpSchema)
};
