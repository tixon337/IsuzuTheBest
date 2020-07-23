const express = require("express");
const router = express.Router();
const { sessionChecker } = require("../middleware/auth.js");

router.get("/", sessionChecker, (req, res) => {
  res.render("admin");
});

router.get("/add", sessionChecker, (req, res) => {
  res.render("addAdmin");
});

router.post("/add", sessionChecker, (req, res) => {
  res.render("addAdmin");
});

// router.post('/', sessionChecker, (req, res) => {

//   res.render('admin')
// })

module.exports = router;
