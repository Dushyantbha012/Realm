const SocketIO = require("socket.io")
import authSocket from "./authSocket";

const initializeSocketIO = (server,namespace)=>{
    const io = SocketIO(server,{
        path:namespace,
    });
    io.use(authSocket);
    io.on("connection",(socket)=>{
        socket.on("joinRoom",(roomJoinData)=>{
            socket.join(roomJoinData.roomID);
        })
        socket.on("message",(msgData)=>{

        })
        socket.on("disconnect",()=>{
            
        })
    })
}

module.exports = initializeSocketIO;