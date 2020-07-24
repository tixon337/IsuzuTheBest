const express = require("express");
const {
  EngineModel,
  CarcassModel,
  TransmissionModel,
  ColorModel,
  ConfigurationModel,
} = require("../DataBase/Database.js");
const { sessionChecker } = require("../middleware/auth.js");

const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const engine = await EngineModel.find();
    const carcass = await CarcassModel.find();
    const transmission = await TransmissionModel.find();
    const color = await ColorModel.find();
    const configuration = await ConfigurationModel.find({ flag: true });    
    const data = { engine, carcass, transmission, color, configuration };
    console.log(data.color);
    res.render("configurator", data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/getSum", async function (req, res) {
  try {
    console.log(req.body);
    const configuration = await ConfigurationModel.find({
      'name': req.body.name,
      "engine.name": req.body.engine,
      "carcass.name": req.body.carcass,
      'transmission.name': req.body.transmission,
    });
    console.log(configuration.length);
    console.log(configuration[0].color.urlimage );
    res.json({ price: configuration[0].price, image: configuration[0].color.urlimage });
  } catch (error) {
    res.json({ error: "Такой комплектации не существует" });
  }
});

module.exports = router;
