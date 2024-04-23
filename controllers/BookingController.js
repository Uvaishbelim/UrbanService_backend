const BookingSchema = require('../models/BookingModel')

const createBooking = async (req, res) => {
    try {
        const savedBooking = (await BookingSchema.create(req.body));
        res.status(200).json({
            message: "Booking  Created",
            flag: 1,
            data: savedBooking,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data: error,
        });
    }
};

const getAllBooking = async (req, res) => {
    try {
        const booking = await BookingSchema.find();
        res.status(200).json({
            message: "Booking Fetched",
            flag: 1,
            data: booking,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            flag: -1,
            data: error,
        });
    }
};

const getBookingById = async (req,res) => {


    try {


        const id = req.params.id;
        const bookings = await BookingSchema.findById(id).populate('serviceId')

        if (bookings == null) {

            // console.log(error)

            res.status(404).json({
                messaage: "booking not found !!!",
                flag: -1
            })
        }

        else {
            res.status(200).json({
                message: "Fetched Booking...",
                data: bookings,
                flag: 1
            });


        }
    } catch (error) {

        
       console.log(error)
    }
}


const getBookingByUserId = async (req,res) => {


    try {


        const id = req.params.id;
        const bookings = await BookingSchema.find({ user: id })

        if (bookings == null) {

            res.status(404).json({
                messaage: "booking not found !!!",
                flag: -1
            })
        }

        else {
            res.status(200).json({
                message: "Fetched Bookings...",
                data: bookings,
                flag: 1
            });


        }
    } catch (error) {

        
       console.log(error)
    }
}

const getBookingByServiceProviderId = async (req, res) => {


    try {


        const id = req.params.id;
        const bookings = await BookingSchema.find({ serviceprovider: id }).populate("user").populate("serviceId")

        if (bookings == null) {

            res.status(404).json({
                messaage: "booking not found !!!",
                flag: -1
            })
        }

        else {
            res.status(200).json({
                message: "Fetched Bookings...",
                data: bookings,
                flag: 1
            });


        }
    } catch (error) {


        console.log(error)
    }
}

const deletebooking = async(req,res)=>{

    try{

        const deletedbooking = await BookingSchema.findByIdAndDelete(req.params.id);

        if(deletedbooking != null){

            res.status(200).json({

                message:"Booking canceled successfully...",
                data:deletedbooking,
                flag:1
            })

        }else{

            res.status(404).json({

                message:"Category not found !!!",
                flag:-1
            })
        }


    }catch(e){

        res.status(500).json({

            message:"Error in server !!!",
            data:e,
            flag:-1
        })
    }
}

const updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updateBooking = await RoleSchema.findByIdAndUpdate(id)

        res.status(201).json({
            message: "Role updated successfully..",
            flag: 1,
            data: updateBooking,
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            flag: -1,
            data: error,
        });
    }
}

const updateBookingStatus = async (req, res) => {


    try {

        const updatedbookingstatus = await BookingSchema.findByIdAndUpdate(req.params.id, req.body)

        if (updatedbookingstatus != null) {
            res.status(201).json({

                message: "Booking done..",
                data: updatedbookingstatus,
                flag: 1
            })
        } else {
            res.status(404).json({

                message: "Booking not found !",
                // data:updatedbookingstatus,
                flag: -1
            })

        }
    } catch (e) {
     
        console.log(e)
        res.status(500).json({
            message: "Error to book !",
        
            data: e,
            flag: -1
        })
    }
}

const pendingStatusById = async (req, res) => {

    try {
        const id = req.params.id
        const doneStatus = (await BookingSchema.find({ status: "Pending", user: id }).populate("serviceprovider").populate("user"))
        if (doneStatus && doneStatus.length > 0) {
            res.status(200).json({
                message: "Pending Status are found",
                data: doneStatus,
                flag: 1
            })
        } else {
            res.status(404).json({
                message: "No Pending Status Found!",
                data: [],
                flag: -1
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            flag: -1,
            data: []
        })
    }
}

const doneStatusById = async (req, res) => {
    try {
        const id = req.params.id
        const doneStatus = (await BookingSchema.find({
            status: "Done", user: id
        }).populate("serviceprovider")
            .populate("user"))
        if (doneStatus && doneStatus.length > 0) {
            res.status(200).json({
                message: "Done Status are found",
                data: doneStatus,
                flag: 1,
            });
        } else {
            res.status(404).json({
                message: "No Done Status Found!",
                data: [],
                flag: -1,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            flag: -1,
            data: [],
        });
    }
};



module.exports = {

    createBooking,
    updateBooking,
    getBookingById,
    getAllBooking,
    updateBookingStatus,
    getBookingByUserId,
    deletebooking,
    getBookingByServiceProviderId,
    pendingStatusById,
    doneStatusById

}