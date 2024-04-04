const routes = require('express').Router()
const subcategorycontroller = require('../controllers/SubCategoryController')

routes.post("/Scategory",subcategorycontroller.createScategory)
routes.get("/Scategory",subcategorycontroller.getdata)
routes.delete("/Scategory/:id",subcategorycontroller.deletedata)
routes.put("/Scategory/:id",subcategorycontroller.updatedata)



 

module.exports = routes