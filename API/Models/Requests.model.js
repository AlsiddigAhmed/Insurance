const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const RequestSchema = new Schema({
  Maker: { type: Schema.Types.ObjectId, ref: "Profile" },
  Service: { type: Schema.Types.ObjectId, ref: "Service" },
  Profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  AcceptDate: { type: Date },
  RequestDate: { type: Date },
  Status: { type: Boolean, default: false },
  ServicePrice: { type: Number },
  ServiceFile: { type: String }
});

module.exports = {
  RequestService: model("Request", RequestSchema)
};
