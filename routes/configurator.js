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
    // console.log(data.engine);
    res.render("configurator", data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/getSum", async function (req, res) {
  try {
    const configuration = await ConfigurationModel.find({
      "engine.name": req.body.engine,
      "carcass.name": req.body.carcass,
      'transmission.name': req.body.transmission,
      'color.name': req.body.color,
    });
    console.log(configuration.length);
    res.json({ price: configuration[0].price });
  } catch (error) {
    res.json({ error: "Такой комплектации не существует" });
  }
});

module.exports = router;
