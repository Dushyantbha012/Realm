const authSocket = (socket,next)=>{
    const {token}= socket.handshake.query;
}

module.exports = authSocket;