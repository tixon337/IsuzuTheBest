const mongoose = require("mongoose");

const connectionAddress =
  "mongodb+srv://isuzu:isuzu@isuzudata.3oevy.mongodb.net/IsuzuData?retryWrites=true&w=majority";
mongoose.connect(connectionAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.pluralize(null);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ошибка соединения с MongoDB"));

const Admins = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Engine = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  volume: Number,
  power: Number,
  enginePistons: String,
  type: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Carcass = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Transmission = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: String,
  gearstages: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Color = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  urlimage: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Configuration = new mongoose.Schema({
  name: String,
  engine: Engine,
  carcass: Carcass,
  transmission: Transmission,
  color: Color,
  flag: {
    type: Boolean,
    default: false,
  },
  numberofseats: String,
  groundclearance: String,
  carrying: Number,
  price: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Сompetitors = new mongoose.Schema({
  name: String,
  engine: Engine,
  carcass: Carcass,
  transmission: Transmission,
  color: Color,
  flag: {
    type: Boolean,
    default: false,
  },
  numberofseats: String,
  groundclearance: String,
  carrying: Number,
  price: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Admins",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const AdminsModel = mongoose.model("Admins", Admins);
const EngineModel = mongoose.model("Engine", Engine);
const CarcassModel = mongoose.model("Carcass", Carcass);
const TransmissionModel = mongoose.model("Transmission", Transmission);
const ColorModel = mongoose.model("Color", Color);
const ConfigurationModel = mongoose.model("Configuration", Configuration);
const СompetitorsModel = mongoose.model("Сompetitors", Сompetitors);

async function addAdmin() {
  await AdminsModel.create({
    name: "Tixon",
    login: "admin",
    password: "admin",
    position: "dev",
  });
}

async function addEngine() {
  let admin = await AdminsModel.findOne({ name: "Tixon" });
  await EngineModel.create({
    name: "3-литровый дизельный двигатель",
    volume: 3,
    power: 177,
    enginePistons: 6,
    type: "Дизельный",
    creator: admin._id,
  });
}

async function addTransmission() {
  let admin = await AdminsModel.findOne({ name: "Tixon" });
  await TransmissionModel.create({
    name: "МКПП",
    type: "Механическая",
    gearstages: 6,
    creator: admin._id,
  });
}

async function addCarcass() {
  let admin = await AdminsModel.findOne({ name: "Tixon" });
  await CarcassModel.create({
    name: "Полуторная",
    type: String,
    creator: admin._id,
  });
}

async function addColor() {
  let admin = await AdminsModel.findOne({ name: "Tixon" });
  await ColorModel.create({
    name: "SPLASH WHITE",
    urlimage: "https://www.isuzu-dmax.ru/static/slider/terra/white/1.jpg",
    creator: admin._id,
  });
}
addColor();
// addCarcass();
// addTransmission();
// addAdmin();
// addEngine();

module.exports = {
  AdminsModel,
  EngineModel,
  CarcassModel,
  TransmissionModel,
  ColorModel,
  ConfigurationModel,
  СompetitorsModel,
};
