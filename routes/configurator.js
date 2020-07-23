const express  = require('express')
const { EngineModel, CarcassModel, TransmissionModel, ColorModel, ConfigurationModel}  = require('../DataBase/Database.js');
const router = express.Router();


router.get('/', async function(req, res){
const engine = await EngineModel.find({flag:true});
const carcass = await CarcassModel.find();
const transmission = await TransmissionModel.find();
const color = await ColorModel.find();
const configuration = await ConfigurationModel.find();
const data = { engine, carcass, transmission, color, configuration }
  res.render('configurator', data);
})

module.exports = router;

