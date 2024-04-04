const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicePSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 8,
  },
  phone: {
    type: String,
    require: true,
    unique:true,
    min: 10,
    max: 10,
  },
  role:{
    type:Schema.Types.ObjectId,
    ref:"Role"
  },
  latitude:{
    type: String
  },
  longitude:{
    type: String
  }
});

module.exports = mongoose.model("ServiceProvider", servicePSchema);
