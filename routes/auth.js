const express = require("express")
const userAuth = require("../controller/userAuth")
const Routes = express.Router()
Routes.post("/aut/register",userAuth.register)
Routes.get("/auth/login",userAuth.login)

module.exports = Routes