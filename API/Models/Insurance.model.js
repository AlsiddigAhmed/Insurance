const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const InsuranceSchema = new Schema({
  Insurane: { type: Schema.Types.ObjectId, ref: "InsurancePackages" },
  Profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  Status: { type: Boolean, default: false },
  DateOfBill: { type: Date }
});

const PackagesSchema = new Schema({
  Price: { type: Number },
  Includes: { type: Array },
  Execludes: { type: Array },
  PackageName: { type: String },
  Details: { type: String },
  Time: { type: Number },
  Favorite: { type: Boolean },
  Image: { type: String }
});

// exporting the models
module.exports = {
  UserInsurance: model("UserInsurance", InsuranceSchema),
  Packages: model("InsurancePackages", PackagesSchema)
};
