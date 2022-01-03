const userOperations = require("../services/userService");
const User = require('../dto/userdto');
const bcrypt = require("../utils/encrypt")
const userAuth = {
    register(req,res){
        let hashPassword = bcrypt.doEncrypt(req.body.password)
        const user = new User(req.body.name,hashPassword,req.body.phone,req.body.email)
        const promise = userOperations.addUser(user)
        promise
        .then(data =>{
            console.log("Data",data)
            res.status(201).json({
                message : "Registration Successfully"
            })
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    loginUser(req,res){
        let email  = req.body.email
        let password = req.body.password
        console.log(password)
        const promise = userOperations.login(email)
        promise.then(
            (data)=>{
                let pass = bcrypt.compare(password,data.password)
                if(email === data.email && pass === true ){
                    res.status(201).json({
                        message : `Login Successfully ${data.name}`
                    })
                }
                else{
                    res.status(500).json({
                        message : "Email And Password Not Match....."
                    })
                }        
        }
         ).catch((err)=>console.log(err))
    }
}
module.exports = userAuth