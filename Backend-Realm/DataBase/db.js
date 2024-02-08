const mongoose = require("mongoose")
const {connectionUrl} = require("../config")
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
        default:[],
        ref:"Room"
    }],
    password:String,
});

const roomSchema = new mongoose.Schema({
    roomId:String,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default : [],
    }],
    chats:[{
        message:String,
        sender:{
            name:String,
            userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
        },
        timeStamp:{type:Date, default:Date.now},
        default:[],
    }]
})

const User = mongoose.model("User",userSchema);
const Room = mongoose.model("Room",roomSchema);

module.exports = {User,Room};