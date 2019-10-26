const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const GigSchema = new Schema({
  ProfileId: { type: Schema.Types.ObjectId, ref: "Profile" },
  UserId: { type: Schema.Types.ObjectId, ref: "Accounts" },
  GigStatus: { type: Boolean, default: true },
  Overview: {
    GigTitle: { type: String },
    GigCategory: { type: String },
    ServiceType: { type: String },
    SearchTags: { type: Array }
  },
  Pricing: {
    DeliveryTime: { type: Number },
    Revision: { type: Number },
    Price: { type: Number, default: 5 }
  },
  Description: {
    Description: { type: String }
  },
  Gallery: {
    Images: { type: String }
  },
  Love: { type: Number, default: 0 },
  Like: { type: Number, default: 0 },
  DisLike: { type: Number, default: 0 }
});

module.exports = {
  Gig: model("Service", GigSchema)
};
