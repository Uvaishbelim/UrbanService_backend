const routes = require('express').Router()
const addresscontroller = require('../controllers/AddressController')

routes.post("/address",addresscontroller.createaddress)
routes.get("/address", addresscontroller.getaddress)
routes.get("/address/:id", addresscontroller.getaddressById)
routes.delete("/address/:id", addresscontroller.deleteaddress)
routes.put("/address/:id", addresscontroller.updateaddress)



module.exports = routes