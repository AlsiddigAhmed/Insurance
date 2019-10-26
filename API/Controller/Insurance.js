const { Packages, UserInsurance } = require("../Models/Insurance.model");
const { ProfileTable } = require("../Models/Profile.model");
// const moment = require("")

class Insurance {
  async getPackages(req, res) {
    try {
      Packages.find().exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  async subscripe(req, res) {
    const { id, pkg } = req.params;
    let Profile = ProfileTable.findOne({ _id: id });
    let Package = Packages.findOne({ _id: pkg });
    let newIns = new UserInsurance();
    try {
      Profile.exec((err, user) => {
        if (err) throw console.error(err);
        Package.exec((err, result) => {
          if (err) throw console.error(err);
          if (user.Balance > result.Price) {
            Profile.findOneAndUpdate(
              { _id: id },
              {
                $set: { Balance: user.Balance - result.Price, Insurance: pkg }
              },
              err => {
                if (err) throw console.error(err);
                newIns.Insurane = pkg;
                newIns.Profile = id;
                newIns.Status = true;
                newIns.DateOfBill = new Date().toString();
                newIns.save((err, result) => {
                  if (err) throw console.error(err);
                  res.json({
                    status: 200,
                    result
                  });
                });
              }
            );
          } else {
            res.json({
              status: 301,
              msg: "no enough balance!"
            });
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getUseInsurance(req, res) {
    const { id } = req.params;
    let insurance = UserInsurance.findOne({ Profile: id })
      .populate("Profile")
      .populate("Insurane")
      .populate("UserId");

    try {
      insurance.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          result,
          status: 200
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new Insurance();
