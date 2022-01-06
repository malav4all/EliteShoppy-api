const express = require("express")
const Routes = express.Router()
const userController = require("../controller/userController")
const {verifyTokenAndAuthoreization} = require("../utils/verifyToken")
Routes.put("/:id",verifyTokenAndAuthoreization,userController.updateUser)
Routes.get("/allUser",userController.fetchAllUser)

module.exports = Routes