const express = require("express");
const {
  EngineModel,
  CarcassModel,
  TransmissionModel,
  ColorModel,
  ConfigurationModel,
} = require("../DataBase/Database.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const engine = await EngineModel.find();
    const carcass = await CarcassModel.find();
    const transmission = await TransmissionModel.find();
    const color = await ColorModel.find();
    const configuration = await ConfigurationModel.find();
    const data = { engine, carcass, transmission, color, configuration };
    console.log(data.engine);
    res.render("addVariantOpt", data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const engine = await EngineModel.find();
    const carcass = await CarcassModel.find();
    const transmission = await TransmissionModel.find();
    const color = await ColorModel.find();
    const configuration = await ConfigurationModel.find();
    const data = { engine, carcass, transmission, color, configuration };
    console.log(data.engine);
    res.render("addVariantOpt", data);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", (req, res) => {
  res.render("changeVariantOpt");
});

router.delete("/", (req, res) => {
  res.render("deleteVariantOpt");
});

module.exports = router;
