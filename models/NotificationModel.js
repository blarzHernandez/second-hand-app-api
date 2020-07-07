import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    _id:{
        type:String,
        unique:true,
        required:true
    },
    notificationMessage:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date
    },
    status:{
        type:String
    }


});

const Notification = mongoose.model("Notification", notificationSchema);


export default Notification;