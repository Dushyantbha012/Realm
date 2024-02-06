import mongoose from "mongoose"
import {connectionUrl} from "../config"
mongoose.connect(connectionUrl)

const userSchema = new mongoose.Schema({
    name:String,
    username:{type:String, unique:true},
    college:String,
    branch:String,
    graduationYear:Number,
    SID:String,
    email:{type:String, unique:true},
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        default:[],
        ref:"Room"
    }],
    password:String,
});

const roomSchema = new mongoose.Schema({
    roomId:String,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    chats:[{
        message:String,
        sender:{
            name:String,
            userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
        },
        timeStamp:{type:Date, default:Date.now},
    }]
})

const User = mongoose.model(userSchema);
const Room = mongoose.model(roomSchema);

module.exports = {User,Room};