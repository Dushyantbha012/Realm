const jwt = require("jsonwebtoken")
import {SECRET_KEY} from('../config')

const authSocket = (socket,next)=>{
    const {token}= socket.handshake.query;
    if(!authHeader){
        console.log("auth failed 1")
        return 
    }
    try {
        const decoded = jwt.verify(authHeader, SECRET_KEY);
        socket.request.userID = decoded.userID;
        next()
    } catch (err) {
        console.log("auth failed 2")
    }
}

module.exports = authSocket;