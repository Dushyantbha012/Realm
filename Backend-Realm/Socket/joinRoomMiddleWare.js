import Room from "../DataBase/db"

const joinRoomMiddleWare = async(socket,roomJoinData)=>{
    try{
        const room = await Room.findOne({roomID:roomJoinData.roomID})
        if(!room) return false;
        return room.users.includes(socket.request.userID);
    }
    catch{
        return false;
    }
}

module.exports=joinRoomMiddleWare