const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({

  servicename: {
    type: String,
    required: true,
  },
  serviceprovider: {
    type: Schema.Types.ObjectId,
    ref: "ServiceProvider"
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "Type",
  },
  fees: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    max: 50,
    required: true,
  },
  city: {
    type: String,
    max: 20,
  },
  state: {
    type: String,
    max: 20,
  },
  imageUrl:{
    type:String
  }
});
module.exports = mongoose.model("Service", serviceSchema);
