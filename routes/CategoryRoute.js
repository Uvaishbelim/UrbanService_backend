const routes = require('express').Router()
const categorycontroller = require('../controllers/CategoryController')


routes.post("/category",categorycontroller.createcategory);
routes.get("/category",categorycontroller.getcategory);
routes.get("/category/:id",categorycontroller.deletecategory);
routes.put("/category/:id",categorycontroller.updatecategory)


module.exports = routes  