const express = require("express");
const { User, Room } = require("../../DataBase/db");
const chatRouters = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
const { authMiddleware } = require("../authMiddleware/authMiddleware");

chatRouters.get("/userrooms", authMiddleware, async (req, res) => {
  console.log("request reached in userrooms")
  const user = await User.findOne({ _id: req.userId });
  const chatRooms = user.rooms;
  const room=chatRooms.map((room) => ({
    roomId: room,
  }))
  console.log("user rooms are ",room)
  res.json({
    room:room
  });
});

chatRouters.get("/allrooms", authMiddleware, async (req, res) => {
  console.log("request reached in all rooms")
  const filter = req.query.filter || "";
  const rooms = await Room.find({
    roomId: {
      $regex: filter,
    },
  });
  const room= rooms.map((room) => ({
    roomId: room.roomId,
    roomdbId: room._id,
  }))
  console.log("sent is ", room)
  res.json({room:room
  });
});

chatRouters.post("/addroom", authMiddleware, async (req, res) => {
  const roomId = req.body.roomId;
  const existingRoom = await Room.findOne({
    roomId: roomId,
  });
  if (existingRoom) {
    return res.status(411).json({ message: "Room already exists" });
  }
  const room = {
    roomId: roomId,
    chats: [],
    users: [req.userId],
  };
  const dbRoom=await Room.create(room);
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.userId,},
    { $addToSet: { rooms: room.roomId }  },
    { new: true }
  );
  console.log("updated user room is ", updatedUser.rooms);
  res.json({ message: "Room created" });
});

chatRouters.post("/joinchat", authMiddleware, async (req, res) => {
  const updatedRoom = await Room.findOneAndUpdate(
    { _id: req.body.roomdbId,},
    { $addToSet: { users: req.userId } },
    { new: true }
  );
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.userId,},
    { $addToSet: { rooms: updatedRoom.roomId} },
    { new: true }
  );
  
  res.json({ message: "added to the room" });
});

module.exports = chatRouters;