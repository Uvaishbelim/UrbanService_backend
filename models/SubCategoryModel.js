

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  }
});

module.exports = mongoose.model('SubCategory',subcategorySchema)