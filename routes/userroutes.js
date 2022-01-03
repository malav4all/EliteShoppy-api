const express = require("express")
const Routes = express.Router()
const userController = require("../controller/userController")

Routes.put("/::id",userController.updateUser)

module.exports = Routes