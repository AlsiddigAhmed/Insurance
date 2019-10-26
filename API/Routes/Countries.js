const Router = require("express").Router();

const Countries = require("../Models/Countries.model");

Router.get("/countries", async (req, res) => {
  const getCountries = await Countries.find({});
  res.json(getCountries);
});

module.exports = Router;
