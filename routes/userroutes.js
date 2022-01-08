const express = require("express")
const Routes = express.Router()
const userController = require("../controller/userController")
const {verifyTokenAndAuthoreization,verifyTokenAndAdmin} = require("../utils/verifyToken")
Routes.put("/:id",verifyTokenAndAuthoreization,userController.updateUser)
Routes.delete("/:id",userController.deleteUser)
Routes.get("/allUser",userController.fetchAllUser)
Routes.get("/find/:id",verifyTokenAndAdmin,userController.getUserByIds)

module.exports = Routes