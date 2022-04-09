const express = require("express")
const userAuth = require("../controller/userAuth")
const Routes = express.Router()
Routes.post("/auth/register",userAuth.register)
Routes.post("/auth/login",userAuth.loginUser)

module.exports = Routes