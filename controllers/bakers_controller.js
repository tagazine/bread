// dependencies
const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker.js");
const bakerSeedDate = require("../models/baker_seed.js");

// export
module.exports = baker;

// route
baker.get("/data/seed", (req, res) => {
  Baker.insertMany(bakerSeedDate)
    .then(res.redirect("/breads"));
});
