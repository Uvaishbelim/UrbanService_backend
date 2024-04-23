const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
const PORT = 4000;

app.use(express.json())

var db = mongoose.connect("mongodb://127.0.0.1:27017/urbanservice1");

db.then(() => {
  console.log("Successfully connected to mongodb...");
}).catch((err) => {
  console.log(err);
});

const roleRoutes = require("./routes/RoleRoute.js");
const userRoutes = require("./routes/UserRoutes.js");
const serviceproviderRoutes = require("./routes/ServiceProviderRoute.js");
const categoryRoutes = require("./routes/CategoryRoute.js");
const subcatetoryRoutes = require("./routes/SubCategoryRoute.js");
const typeRoutes = require("./routes/TypeRoute.js");
const serviceRoutes = require("./routes/ServiceRoute.js");
const bookingRoutes = require("./routes/BookingRoute.js");
const uploadRoutes = require("./routes/UploadRoutes.js");
const addressRoutes = require("./routes/AddressRoute.js");

app.use("/roles", roleRoutes);
app.use("/users", userRoutes);
app.use("/sproviders", serviceproviderRoutes);
app.use("/categories", categoryRoutes);
app.use("/Scategories", subcatetoryRoutes);
app.use("/types", typeRoutes);
app.use("/services", serviceRoutes);
app.use("/bookings", bookingRoutes);
app.use("/uploads", uploadRoutes);
app.use("/addresses", addressRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
