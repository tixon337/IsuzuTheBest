import express from 'express';
import {  EngineModel, CarcassModel, TransmissionModel, ColorModel, ConfigurationModel,} from '../DataBase/Database'
const router = express.Router();


router.get('/', function(req, res){
const engine = await EngineModel.find({flag:true});
const carcass = await CarcassModel.find();
const transmission = await TransmissionModel.find();
const color = await ColorModel.find();
const configuration = await ConfigurationModel.find();
const data = { engine, carcass, transmission, color, configuration }
  res.render('configuration', data);
})




export default router;
