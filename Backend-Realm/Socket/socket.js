const SocketIO = require("socket.io");
import authSocket from "./authSocket";
import { Room, User } from "../DataBase/db";
import joinRoomMiddleWare from "./joinRoomMiddleWare";

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
    socket.on("message", (msgData) => {});
    socket.on("disconnect", () => {});
  });
};

module.exports = initializeSocketIO;
