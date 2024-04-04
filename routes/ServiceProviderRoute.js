const router = require('express').Router();
const serviceprovidercontroller = require('../controllers/ServiceProviderController');

router.post("/sprovider",serviceprovidercontroller.createSprovider)
router.get("/sprovider",serviceprovidercontroller.getSprovider)
router.get("/sprovider/:id",serviceprovidercontroller.getSproviderById)
router.delete("/sprovider/:id",serviceprovidercontroller.deleteSprovider)
router.put("/sprovider/:id",serviceprovidercontroller.updateSprovider)
// router.get("/sprovider/:id",serviceprovidercontroller.getSproviderByServiceId)
router.post("/sprovider/login",serviceprovidercontroller.loginserviceprovider)
router.post("/sprovider/isserproexist", serviceprovidercontroller.isSerproExist)
router.post("/sprovider/resetpassword", serviceprovidercontroller.resetPassword)


module.exports = router