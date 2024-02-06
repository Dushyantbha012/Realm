import Room from "../DataBase/db"

const joinRoomMiddleWare = async(socket,roomJoinData)=>{
    try{
        const room = await Room.findOne({roomId:roomJoinData.roomId})
        if(!room) return false;
        return room.users.includes(socket.request.userId);
    }
    catch{
        return false;
    }
}

module.exports=joinRoomMiddleWare