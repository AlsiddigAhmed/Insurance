const Route = require("express").Router();
const Insurance = require("../Controller/Insurance");

/*============================================
================insurance route===============
============================================== */

Route.post("/subscripe/:id/:pkg", Insurance.subscripe); // id here is belonge to the profile id

Route.get("/packages", Insurance.getPackages);

Route.get("/getuserinsurance/:id", Insurance.getUseInsurance);

module.exports = Route;
