const router = require('express').Router()
const uploadcontroller = require("../controllers/UploadController")

router.post("/upload",uploadcontroller.fileUpload)

module.exports= router