const { Gig } = require("../Models/Gig.model");

class Gigs {
  async getGigById(req, res) {
    const { gigId } = req.params;

    let getGig = Gig.findOne({ _id: gigId });
    try {
      getGig.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  async updateOverview(req, res) {
    const { id } = req.params;
    const { gigTitle, gigCat, serviceType, tags } = req.body;
    try {
      Gig.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            Overview: {
              GigTitle: gigTitle,
              GigCategory: gigCat,
              ServiceType: serviceType,
              SearchTags: tags
            }
          }
        },
        (err, result) => {
          if (err) throw console.error(err);
          res.json({
            result,
            status: 200
          });
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateDescription(req, res) {
    const { id } = req.params;
    const { desc } = req.body;
    try {
      Gig.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            Description: { Description: desc },
            Gallery: { Images: req.body.image ? req.body.image : req.file.path }
          }
        },
        (err, result) => {
          if (err) throw console.error(err);
          res.json({
            result,
            status: 200
          });
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async updatePricing(req, res) {
    const { id } = req.params;
    const { GigDays, GigPrice, GigReviews } = req.body;
    try {
      Gig.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            Pricing: {
              DeliveryTime: GigDays,
              Revision: GigReviews,
              Price: GigPrice
            }
          }
        },
        (err, result) => {
          if (err) throw console.error(err);
          res.json({
            result,
            status: 200
          });
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  }

  async bestGigs(req, res) {
    Gig.find()
      .sort({ date: -1 })
      .populate("ProfileId")
      .populate("UserId")
      .exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          result,
          status: 200
        });
      });
  }

  async getGig(req, res) {
    const { GigId } = req.params;
    let gig = Gig.findOne({ _id: GigId })
      .populate("UserId")
      .populate("ProfileId");
    try {
      gig.exec((err, result) => {
        if (err) {
          res.json({
            msg: "Error getting the gig",
            err,
            status: 403
          });
        } else {
          res.json({
            msg: "The gig has been found successfully",
            result,
            status: 200
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  async gigLoves(req, res) {
    const { ProfileId, GigId, Love } = req.params;
    try {
      Gig.findOneAndUpdate(
        { _id: GigId },
        { $set: { Love, ProfileId, GigId } },
        { upsert: true },
        (err, result) => {
          if (err) {
            res.json({
              msg: "cannot love gig",
              err,
              status: 403
            });
          } else {
            res.json({
              msg: "Gig now in favorites",
              result,
              status: 200
            });
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  async pauseGig(req, res) {
    const { gigId, gigStatus } = req.params;

    try {
      Gig.findOneAndUpdate(
        { _id: gigId },
        { $set: { GigStatus: gigStatus } },
        (err, result) => {
          if (err) {
            res.json({
              msg: "Error updating gig status",
              status: 404,
              err
            });
          } else {
            res.json({
              msg: "Updating gig status",
              status: 200,
              result
            });
          }
        }
      );
    } catch (err) {
      console.error(err);
    }
  }

  async userGigs(req, res) {
    const { ProfileId } = req.params;
    try {
      let userGigs = Gig.find({ ProfileId });

      userGigs.exec((err, result) => {
        if (err) {
          res.json({
            msg: "error finding profile gigs",
            status: 403,
            err
          });
        } else {
          res.json({
            msg: "All profile gigs have been found successfully",
            result,
            status: 200
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getLatestMobileGigs(req, res) {
    let Gigs = Gig.find({ "Overview.GigCategory": "Mobile" })
      .limit(5)
      .sort({ date: -1 })
      .populate("UserId")
      .populate("ProfileId");
    try {
      Gigs.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getLatestWebGigs(req, res) {
    let Gigs = Gig.find({ "Overview.GigCategory": "Web" })
      .limit(5)
      .sort({ date: -1 })
      .populate("UserId")
      .populate("ProfileId");
    try {
      Gigs.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getLatestApiGigs(req, res) {
    let Gigs = Gig.find({ "Overview.GigCategory": "API" })
      .limit(5)
      .sort({ date: -1 })
      .populate("UserId")
      .populate("ProfileId");
    try {
      Gigs.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getLatestDesktopGigs(req, res) {
    let Gigs = Gig.find({ "Overview.GigCategory": "Desktop" })
      .limit(5)
      .sort({ date: -1 })
      .populate("UserId")
      .populate("ProfileId");
    try {
      Gigs.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getLatestSoftwareGigs(req, res) {
    let Gigs = Gig.find({ "Overview.GigCategory": "Software" })
      .limit(5)
      .sort({ date: -1 })
      .populate("UserId")
      .populate("ProfileId");
    try {
      Gigs.exec((err, result) => {
        if (err) throw console.error(err);
        res.json({
          status: 200,
          result
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  async deleteGig(req, res) {
    let neGig = Gig.findOneAndDelete({ _id: req.params.id });
    try {
      neGig.exec((err, result) => {
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
}

module.exports = new Gigs();
