const express = require("express");
const {
  EngineModel,
  CarcassModel,
  TransmissionModel,
  ColorModel,
  ConfigurationModel,
} = require("../DataBase/Database.js");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const engine = await EngineModel.find();
    const carcass = await CarcassModel.find();
    const transmission = await TransmissionModel.find();
    const color = await ColorModel.find();
    const configuration = await ConfigurationModel.find();
    const data = { engine, carcass, transmission, color, configuration };
    console.log(data.engine);
    res.render("configurator", data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
