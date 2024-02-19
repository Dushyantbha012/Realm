const express = require("express");
const cors = require("cors");
const { PORT } = require("./config");
const router = require("./routers/router");

//basic express router
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Running on ", PORT);
});

//////////////////////////////////////////////////////////////////////////////////////////////

//socket io initialization

const app1 = express();
app1.use(cors());
const server = require("http").createServer(app1);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

//imports for socketio

const authSocket = require("./Socket/authSocket");
const { Room, User } = require("./DataBase/db");
const joinRoomMiddleWare = require("./Socket/joinRoomMiddleWare");

//????????????????????????????????????????????????????????????????????????????
//io.use(authSocket); will implement it later correctly and loock for bugs
//????????????????????????????????????????????????????????????????????????????

io.on("connection", (socket) => {
  console.log("connected to chatbackend", socket);
  socket.on("joinRoom", async (roomJoinData) => {
    try {
      if (joinRoomMiddleWare(socket, roomJoinData)) {
        const { roomId } = roomJoinData;
        socket.join(roomId);
        const room = await Room.findOne({ roomId: roomId });
        const initialChats = room.chats;
        socket.emit("initialChats", initialChats);
      } else {
        socket.emit("initialChats", []);
      }
    } catch {
      socket.emit("initialChats", []);
    }
  });
  socket.on("sendMessage", async (msgData) => {
    const room = await Room.findOneAndUpdate(
      { roomId: msgData.roomId },
      { $push: { chats: msgData.chat } }
    ).exec();
    io.to(msgData.roomId).emit("receiveMessage", msgData.chat);
  });
  socket.on("disconnect", () => {
    console.log("Dissconnect socket id", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Chat Backend Started");
});
