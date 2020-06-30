import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id:{
      type: String,
      unique: true,
      required: true,
    },
    user:{
        type:String,
        required:true,
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    status:{
        type:String
    }, 
    settings:{
        type:Array
    },
    avatar:{
        type:String,
    },
    bookmark:{
        type:Array
    },
    token:{
        type:String
    },
    rating:{
        type:Number
    },
},
{ timestamps: true },
);


const User = mongoose.model("User",userSchema);
export default User;