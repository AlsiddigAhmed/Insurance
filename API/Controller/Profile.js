const { ProfileTable } = require("../Models/Profile.model");

const Users = require("../Models/Registration.model");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   }
// });
// const upload = multer({ storage });

class Profile {
  async getAllData(req, res) {
    const { id } = req.params;
    let profile = ProfileTable.findOne({ _id: id }).populate("Insurance");
    try {
      profile.exec((err, profile) => {
        if (err) throw console.error(err);
        let user = Users.Account.findOne({ _id: profile.UserId });
        user.exec((err, user) => {
          if (err) throw console.error(err);
          console.log(profile);
          res.json({
            user,
            profile
          });
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new Profile();
