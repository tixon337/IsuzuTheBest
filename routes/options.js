const express = require("express");
const { ConfigurationModel } = require("../DataBase/Database.js");
const router = express.Router();

router.get("/options", async (req, res) => {
  await res.render("addVariantOpt");
});

router.post("/options", async (req, res) => {
  await res.render("addVariantOpt");
});

// router.put("/", (req, res) => {
//   res.render("changeVariantOpt");
// });

// router.delete("/", (req, res) => {
//   res.render("deleteVariantOpt");
// });

module.exports = router;
