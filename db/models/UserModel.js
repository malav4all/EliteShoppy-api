/**
 * Maintain User Schema
 * @author Malav Naagar
 * @copyright ABC
 * @version 1.0 
 * @summary User Schema File
 */


 const connection  = require('../connect');
 const {Schema} = require('mongoose');
 const UserSchema = new Schema({
     name:{type:Schema.Types.String,required:true,unique:true,min:3,max:200},
     password:{type:Schema.Types.String,required:true,min:8,max:200},
     phone:{type:Schema.Types.String,required:true},
     email:{type:Schema.Types.String,required:true},
     logintime:{type:Schema.Types.Date,default:new Date()},
 },{timestamps:true});
 
 const UserModel = connection.model('users',UserSchema);
 module.exports = UserModel;
 