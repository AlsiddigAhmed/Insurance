const { RequestService } = require("../Models/Requests.model");

class Requests {
  async postRequest(req, res) {
    const { id } = req.params;
    const { ProfileId, ServiceId, Price } = req.body;
    let Request = new RequestService();
    try {
      Request.Maker = id;
      Request.Service = ServiceId;
      Request.Profile = ProfileId;
      Request.ServicePrice = Price;
      Request.RequestDate = new Date().toString();
      Request.save((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200
        });
      });
    } catch (err) {
      throw console.error(err);
    }
  }

  async getSellerRequests(req, res) {
    const { id } = req.params;
    let Requests = RequestService.find({ Maker: id }).populate([
      {
        path: "Maker",
        populate: [
          {
            path: "Maker"
          },
          {
            path: "UserId"
          }
        ]
      },
      "Service",
      {
        path: "Profile",
        populate: [
          {
            path: "Profile"
          },
          {
            path: "UserId"
          }
        ]
      }
    ]);
    try {
      Requests.exec((err, result) => {
        if (err) throw console.error(err);
        // console.log(result);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      throw console.error(err);
    }
  }

  async getBuyerRequests(req, res) {
    const { id } = req.params;
    let Requests = RequestService.find({ Profile: id }).populate([
      {
        path: "Maker",
        populate: [
          {
            path: "Maker"
          },
          {
            path: "UserId"
          }
        ]
      },
      "Service",
      {
        path: "Profile",
        populate: [
          {
            path: "Profile"
          },
          {
            path: "UserId"
          }
        ]
      }
    ]);
    try {
      Requests.exec((err, result) => {
        if (err) throw console.error(err);
        // console.log(result);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      throw console.error(err);
    }
  }

  async acceptRequest(req, res) {
    const { id } = req.params;
    let Accept = RequestService.findByIdAndUpdate(
      { _id: id },
      { $set: { Status: true, AcceptDate: new Date().toString() } }
    );
    try {
      await Accept.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      throw console.error(err);
    }
  }
  async removeRequest(req, res) {
    const { id } = req.params;
    try {
      RequestService.findByIdAndDelete({ _id: id }).exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      throw console.error(err);
    }
  }

  async uploadRequest(req, res) {
    const { id } = req.params;
    try {
      RequestService.findOneAndUpdate(
        { _id: id },
        { $set: { ServiceFile: req.file.path } },
        (err, result) => {
          if (err) throw console.error(err);

          res.json({
            status: 200
          });
        }
      );
    } catch (err) {
      throw console.error(err);
    }
  }
}

module.exports = new Requests();
