const UserModel = require("../db/models/UserModel");
const userSerives = {
    addUser(UserObject){
        const promise = UserModel.create(UserObject);
        return promise
    }
}

module.exports = userSerives;