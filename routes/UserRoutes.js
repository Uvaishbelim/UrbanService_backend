const router = require('express').Router();
const userController = require("../controllers/UserController");

router.post("/user",userController.createuser)
router.get("/user",userController.getuser)
router.get("/user/:id", userController.getUserById)
router.delete("/user/:id",userController.deleteuser)
router.put("/user/:id",userController.updateuser)
router.post("/user/login",userController.loginuser)
router.post("/user/isuserexist", userController.isUserExist)
router.post("/user/resetpassword", userController.resetPassword)

module.exports = router