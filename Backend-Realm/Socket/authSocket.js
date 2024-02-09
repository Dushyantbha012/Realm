const jwt = require("jsonwebtoken")
const {SECRET_KEY} =require('../config')

const authSocket = (socket,next)=>{
    console.log("socket request is ", socket.request);
    const {token}= socket.handshake.query;
    if(!token){
        console.log("auth failed 1")
        return 
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        socket.request.userId = decoded.userId;
        next()
    } catch (err) {
        console.log("auth failed 2")
    }
}

module.exports = authSocket;