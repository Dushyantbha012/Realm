import mongoose from "mongoose"
import {connectionUrl} from "../config"
import { timeStamp } from "console";
import { PassThrough } from "stream";
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
    roomID:String,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    chats:[{
        message:String,
        sender:{
            name:String,
            userID:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
        },
        timeStamp:{type:Date, default:Date.now},
    }]
})

const User = mongoose.model(userSchema);
const Room = mongoose.model(roomSchema);

module.exports = {User,Room};