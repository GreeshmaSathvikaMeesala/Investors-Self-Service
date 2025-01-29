const mongoose=require('mongoose')
const Users=new mongoose.Schema(
    {
        Fullname:String,
        Username:String,
        Aadhar:String,
        email:String,
        password:String,
        confirm_password:String
    }
)
const UserModel=mongoose.model('user',Users)
module.exports=UserModel