const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProfileSchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "Accounts" },
  Insurance: { type: Schema.Types.ObjectId, ref: "UserInsurance" },
  ProfilePic: { type: String },
  Description: { type: String },
  Skills: Array,
  Languages: Array,
  Balance: { type: Number, default: 30 },
  Status: { type: Boolean, default: true }
});

module.exports = {
  ProfileTable: model("Profile", ProfileSchema)
};
