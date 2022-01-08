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
        const promise = await UserModel.findByIdAndUpdate(id,data,{new:true})
        return promise
    },
    async getAllUsers(query){
        const promise = query ? await UserModel.find().sort({_id:-1}).limit(5): await UserModel.find()
        return promise
    },
    async delete(id){
        const promise = UserModel.findByIdAndDelete(id);
        return promise
    },
    async getUserById(id){
        const promise = await UserModel.findById(id)
        return promise
    }
}

module.exports = userSerives;