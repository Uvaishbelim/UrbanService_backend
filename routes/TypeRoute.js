const router = require('express').Router();
const typeController = require('../controllers/TypeController')

router.post("/type",typeController.createtype)
router.get("/type",typeController.gettypedata)
router.delete("/type/:id",typeController.deletetypedata)
router.put("/type/:id",typeController.updatetypedata)



module.exports = router