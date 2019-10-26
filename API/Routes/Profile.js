const Route = require("express").Router();
const bodyParser = require("body-parser");
const { ProfileTable } = require("../Models/Profile.model");
const { UserInsurance } = require("../Models/Insurance.model");
const ProfileController = require("../Controller/Profile");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage });

let ParseBodyData = bodyParser.urlencoded({ extended: true });

// posting an image to the api

Route.post("/postuserimage/:id", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  ProfileTable.findOneAndUpdate(
    { _id: id },
    { $set: { ProfilePic: req.file.path } },
    { upsert: true },
    (err, result) => {
      if (err) {
        res.json({
          err,
          msg: "err updating the description",
          status: 403
        });
      } else {
        res.json({
          result,
          msg: "the profile was successfully updated",
          status: 200
        });
      }
    }
  );
});

Route.get("/profile/overview/:id", ParseBodyData, async (req, res) => {
  const { id } = req.params;

  let Insurance = UserInsurance.findOne({ Profile: id }).populate({
    path: "Profile",
    populate: [
      {
        path: "Profile"
      },
      {
        path: "UserId"
      }
    ]
  });
  let profile = ProfileTable.findOne({ _id: id }).populate("UserId");
  Insurance.exec((err, result) => {
    if (result) {
      if (err) {
        res.json({
          msg: "cannot find user",
          status: 404
        });
      } else {
        res.json({
          msg: "user was successfully found",
          result,
          status: 200
        });
      }
    } else {
      profile.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          msg: "user was successfully found",
          result: { Profile: result },
          status: 200
        });
      });
    }
  });
});

/*============================================
=================Profile route================
============================================== */
Route.get("/profile/:id", ParseBodyData, async (req, res) => {
  const { id } = req.params;
  let getProfile = ProfileTable.findOne({ UserId: id }).populate("UserId");
  getProfile.exec((err, result) => {
    if (err) {
      res.json({
        userInfo: result,
        msg: "the user not found!",
        status: 404
      });
    } else if (result === null) {
      createNewUser(id);
      res.json({
        result,
        msg: "new user has been created",
        status: 200
      });
    } else {
      res.json({
        result,
        msg: "the user was found and the data is all set",
        status: 200
      });
    }
  });
}); // end of the route

/*============================================
===============Post Profile route=============
============================================== */
Route.put("/profile/:id/sendprofiledesc", ParseBodyData, async (req, res) => {
  const { description } = req.body;
  const { id } = req.params;

  ProfileTable.findOneAndUpdate(
    { _id: id },
    { $set: { Description: description } },
    { upsert: true },
    (err, result) => {
      if (err) {
        res.json({
          result,
          msg: "err updating the description",
          status: 403
        });
      } else {
        res.json({
          msg: "the profile was successfully updated",
          status: 200
        });
      }
    }
  );
});

Route.put("/profile/:id/sendLang", ParseBodyData, async (req, res) => {
  const { Languages } = req.body;
  const { id } = req.params;

  ProfileTable.findOneAndUpdate(
    { _id: id },
    { $set: { Languages } },
    { upsert: true },
    (err, result) => {
      if (err) {
        res.json({
          result,
          msg: "err updating the description",
          status: 403
        });
      } else {
        res.json({
          msg: "the profile was successfully updated",
          status: 200
        });
      }
    }
  );
});

Route.get("/profile/getalldata/:id", ProfileController.getAllData);

/*============================================
==============Update Profile route============
============================================== */
// Route.put("/profile", ParseBodyData, (req, res) => {
//   res.send("update profile by user id");
// });

createNewUser = async id => {
  let fillProfile = await ProfileTable();

  fillProfile.UserId = id;

  fillProfile.save().then(saved => {
    return saved;
  });
};

module.exports = Route;
