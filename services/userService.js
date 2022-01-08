const UserModel = require("../db/models/UserModel");
const userSerives = {
   async addUser(UserObject){
        const promise = await UserModel.create(UserObject);
        return promise
    },
    async login(email){
        const promise = await UserModel.findOne({email})
        return promise
    },
    async updateUser(id,data){
        console.log("User Service Id",id)
        const promise = await UserModel.findByIdAndUpdate(id,data,{new:true})
        return promise
    },
    getAllUsers(){
        const promise = new Promise((resolve,reject)=>{
             UserModel.find({},(err,doc)=>{
                if(err){
                    reject('Error',err.message)
                }
                else{
                    resolve(doc);
                }
            })
        })
        return promise
    }
}

module.exports = userSerives;