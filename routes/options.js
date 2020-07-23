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
    const data = {};
    console.log(data.engine);
    res.render("addVariantOpt");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = {};
    console.log(data.engine);
    res.render("addVariantOpt");
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  const engine = await EngineModel.find();
  const carcass = await CarcassModel.find();
  const transmission = await TransmissionModel.find();
  const color = await ColorModel.find();
  const configuration = await ConfigurationModel.find();
  switch (req.body.options) {
    case "carcass":
      res.render("addNewVariantOptions", { carcass });
      break;

    case "color":
      res.render("addNewVariantOptions", { color });
      break;

    case "engine":
      res.render("addNewVariantOptions", { engine });
      break;

    case "transmission":
      res.render("addNewVariantOptions", { transmission });
      break;

    default:
      break;
  }
});

router.post("/addoptions", async (req, res) => {
  console.log(req.body);
  res.redirect("/options");
});

router.put("/", (req, res) => {
  res.render("changeVariantOpt");
});

router.delete("/", (req, res) => {
  res.render("deleteVariantOpt");
});

module.exports = router;
