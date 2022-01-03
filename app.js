const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
//middleWares
app.use(cors())
app.use(express.json())

//Routes
app.use("/",require("./routes/userroutes"))
app.use("/",require("./routes/auth"))
const server = app.listen(process.env.PORT,()=>{
    console.log("Backend Up",server.address().port)
})