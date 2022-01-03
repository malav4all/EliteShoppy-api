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
    updateUser(){

    }
}

module.exports = userSerives;