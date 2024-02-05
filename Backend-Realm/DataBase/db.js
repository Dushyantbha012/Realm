import mongoose from "mongoose"
import {connectionUrl} from "../config"
mongoose.connect(connectionUrl)

const userSchema = new mongoose.Schema({
    Name:String,
    UserName:{type:String, unique:true},
    College:String,
    Branch:String,
    GraduationYear:Number,
    SID:String,
    Email:{type:String, unique:true},
});

const User = mongoose.model(userSchema);

module.exports = {User};