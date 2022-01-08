const userOperations = require("../services/userService");
const User = require('../dto/userdto');
const bcrypt = require("../utils/encrypt")
const token = require("../utils/token")
const userAuth = {
    //User Registration
    register(req,res){
        let hashPassword = bcrypt.doEncrypt(req.body.password)
        const user = new User(req.body.name,hashPassword,req.body.phone,req.body.email)
        const promise = userOperations.addUser(user)
        promise
        .then(data =>{
            res.status(201).json({
                message : "Registration Successfully",
                data:data
            })
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    //User Login With JWT and Encrypt Password
    loginUser(req,res){
        let email  = req.body.email
        let password = req.body.password
        const promise = userOperations.login(email)
        promise.then(
            (data)=>{
                let pass = bcrypt.compare(password,data.password)
                if(email === data.email && pass === true ){
                    const {password,...others} = data._doc
                    const accessToken = token.createToken({
                        id:data._id,
                        isAdmin:data.isAdmin
                    })
                    res.status(200).json({...others,accessToken})
                }
                else{
                    res.status(500).json({
                        message : "Email And Password Not Match....."
                    })
                }        
        }
         ).catch((err)=>res.status(500).json(err))
    }
}
module.exports = userAuth