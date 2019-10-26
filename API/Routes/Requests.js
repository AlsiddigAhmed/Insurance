const Router = require("express").Router();
const RequestController = require("../Controller/Requests");

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

Router.post("/postrequest/:id/", RequestController.postRequest);

Router.get("/sellerrequest/:id", RequestController.getSellerRequests);

Router.get("/buyerrequest/:id", RequestController.getBuyerRequests);

Router.put("/acceptrequest/:id", RequestController.acceptRequest);

Router.post(
  "/uploadrequest/:id",
  upload.single("service"),
  RequestController.uploadRequest
);

Router.delete("/deleterequest/:id", RequestController.removeRequest);

module.exports = Router;
