import mongoose from "mongoose"
import {connectionUrl} from "../config"
mongoose.connect(connectionUrl)

const userSchema = mongoose.Schema({

});

const User = mongoose.model(userSchema);

module.exports = {User};