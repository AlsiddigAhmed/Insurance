const { Packages } = require("../Models/Insurance.model");

const { DB_URL } = require("../Configs/Defaults");
const mongoose = require("mongoose");

// connection with database
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw new Error(err);
    console.log("Database Connected...");
  }
);

new Packages({
  Price: 10,
  Includes: ["تطبيقات ويب", "دعم تقني"],
  Execludes: ["تطبيقات هواتف", "تطبيقات حاسوب", "برامج API"],
  PackageName: "حزمة عادية",
  Details:
    "عند تنشيط هذه الباقة لايمكنك استخدام الخدمات الغير مضمنة بها عن طريق التأمين ولكن يمكنك شرائها مباشراً",
  Time: 30,
  Favorite: false,
  Image: "upload/basic.png"
}).save((err, result) => {
  if (err) console.error(err);
  console.log(result);
});
