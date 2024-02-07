const SocketIO = require("socket.io");
const authSocket = require("./authSocket");
const { Room, User } = require("../DataBase/db");
const joinRoomMiddleWare = require("./joinRoomMiddleWare");

const initializeSocketIO = (server, namespace) => {
  const io = SocketIO(server, {
    path: namespace,
  });

  io.use(authSocket); //authentication

  io.on("connection", (socket) => {
    socket.on("joinRoom", async (roomJoinData) => {
      if (joinRoomMiddleWare(socket, roomJoinData)) {
        const { roomId } = roomJoinData;
        socket.join(roomId);
        const room = await Room.findOne({ roomId: roomId });
        const initialChats = room.chats;
        socket.emit("initialChats", initialChats);
      } else {
        socket.emit("initialChats", []);
      }
    });
    socket.on("send_message", async(msgData) => {
      const room= await Room.findOneAndUpdate({roomId:msgData.roomId},{$push:{chats:msgData.chat}}).exec();
      io.to(msgData.roomId).emit("receive_message",msgData.chat);
    });
    socket.on("disconnect", () => {
      console.log("Dissconnect socket id", socket.id)
    });
  });
};

module.exports = initializeSocketIO;
