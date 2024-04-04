const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema  = new Schema({

    serviceId:{
        type:Schema.Types.ObjectId,
        ref:"service"
    },
    serviceprovider:{
        type:Schema.Types.ObjectId,
        ref:"ServiceProvider"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    totalAmount:{
        type: Number,
        require:true
    },
    status:{
        type:String,
        default: "Pending"
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address" ,
        default:null
      }
})

module.exports= mongoose.model("Booking",bookingSchema)