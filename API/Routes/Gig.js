// Services
const Route = require("express").Router();
const bodyParser = require("body-parser");
const Service = require("../Models/Gig.model");
// const Profile = require("../Models/Profile.model");
const GigController = require("../Controller/Gigs");

let ParseBodyData = bodyParser.urlencoded({ extended: true });

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

// get all servises
Route.post(
  "/gig/creategig/:ProfileId/:UserId",
  upload.single("image"),
  async (req, res) => {
    const { ProfileId, UserId } = req.params;
    const { desc, tag, cat, title, reviews, day, type, price } = req.body;

    let newGig = new Service.Gig();
    newGig.ProfileId = ProfileId;
    newGig.UserId = UserId;
    newGig.Overview.GigTitle = title;
    newGig.Overview.GigCategory = cat;
    newGig.Overview.ServiceType = type;
    newGig.Overview.SearchTags = tag;
    newGig.Pricing.DeliveryTime = day;
    newGig.Pricing.Revision = reviews;
    newGig.Pricing.Price = price;
    newGig.Description.Description = desc;
    newGig.Gallery.Images = req.file.path;

    newGig.save((err, result) => {
      if (err) {
        res.json({
          msg: "unable to to save the service data",
          err,
          status: 403
        });
      } else {
        res.json({
          msg: "the service was successfully saved",
          result,
          status: 200
        });
      }
    });
  }
);

Route.get("/gig/allprofilegigs/:ProfileId", GigController.userGigs);

Route.get("/gig/pause/:gigId/:gigStatus", GigController.pauseGig);

Route.get("/giglove/:ProfileId/:GigId/:Love", GigController.gigLoves);

Route.get("/getgig/:GigId", GigController.getGig);

Route.get("/bestgigs", GigController.bestGigs);

Route.get("/getgigbyid/:gigId", GigController.getGigById);
// get best gigs
Route.get("/getlatestmobilegigs", GigController.getLatestMobileGigs);

Route.get("/getlatestapigigs", GigController.getLatestApiGigs);

Route.get("/getlatestdesktopgigs", GigController.getLatestDesktopGigs);

Route.get("/getlatestsoftwaregigs", GigController.getLatestSoftwareGigs);

Route.get("/getlatestwebgigs", GigController.getLatestWebGigs);
// updating gig data
Route.post("/updateoverview/:id", GigController.updateOverview);

Route.post("/updatepricing/:id", GigController.updatePricing);

Route.post("/deletegig/:id", GigController.deleteGig);

Route.post(
  "/updatedescription/:id",
  upload.single("image"),
  GigController.updateDescription
);

module.exports = Route;
