const express = require('express');
const router = express.Router();
const roleController = require("../controllers/RoleController")

router.post("/role",roleController.createroledata)
router.get("/role",roleController.getroledata)
router.delete("/role/:id",roleController.deleteroledata)
router.put("/role/:id",roleController.updateroledata)

module.exports= router;