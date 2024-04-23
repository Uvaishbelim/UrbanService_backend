const routes = require('express').Router()
const bookingcontroller = require('../controllers/BookingController')


routes.post("/booking",bookingcontroller.createBooking);
routes.get("/booking",bookingcontroller.getAllBooking);
routes.get("/booking/:id",bookingcontroller.getBookingById);
// routes.get("/category/:id",categorycontroller.deletecategory);
routes.put("/booking/:id",bookingcontroller.updateBooking)
routes.put("/bookingstatus/:id",bookingcontroller.updateBookingStatus)
routes.get("/booking/user/:id",bookingcontroller.getBookingByUserId)
routes.get("/booking/provider/:id", bookingcontroller.getBookingByServiceProviderId)
routes.delete("/booking/:id",bookingcontroller.deletebooking)
routes.get("/pendingStatus/:id", bookingcontroller.pendingStatusById);
routes.get("/doneStatus/:id", bookingcontroller.doneStatusById);


module.exports = routes  