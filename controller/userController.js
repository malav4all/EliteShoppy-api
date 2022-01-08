const UserService = require("../services/userService")
const userController = {
    //User Update By Verify Token
    updateUser(req,res){
        let id  = req.params.id
        let userData = req.body
        const promise = UserService.updateUser(id,userData)
        promise.then((data)=>{
            console.log(data)
            res.status(201).json({
                message : "Update Successfully"
            })
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    // fetch All Users
    fetchAllUser(req,res){
        const promise = UserService.getAllUsers();
        promise.then((data)=>{
            res.send(data)
            console.log(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

module.exports = userController