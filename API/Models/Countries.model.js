const { Schema, model } = require("mongoose");

const CountriesSchema = new Schema({
  E_country: { type: String },
  A_country: { type: String },
  E_city: { type: String },
  A_city: { type: String }
});

module.exports = model("countries", CountriesSchema);
