const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number}
});

module.exports= mongoose.model('users',UserSchema);