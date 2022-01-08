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
    // Delete User
    deleteUser(req,res){
        let id = req.params.id
        const promise = UserService.delete(id)
        promise
        .then((data)=>{
            console.log(data)
            res.status(200).json({
                message : "Delete Successfully"
            })
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },
    // Get User By id
    getUserByIds(req,res){
        let id = req.params.id
        const promise = UserService.getUserById(id)
        promise
        .then((data)=>{
            console.log(data)
            const {password,...others} = data._doc
            res.status(200).json(others)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },
    // fetch All Users
    fetchAllUser(req,res){
        const query = req.query.new
        console.log(query)
        const promise = UserService.getAllUsers(query);
        promise.then((data)=>{
            res.send(data)
            console.log(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

module.exports = userController