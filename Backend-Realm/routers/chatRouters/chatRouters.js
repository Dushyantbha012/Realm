const express = require("express");
const { User, Room } = require("../../DataBase/db");
const chatRouters = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
const { authMiddleware } = require("../authMiddleware/authMiddleware");

chatRouters.get("/userrooms", authMiddleware, async (req, res) => {
  const userId = req.UserId;
  const user = await User.findOne({ _id: userId });
  const chatRooms = user.rooms;
  res.json({ listOfRooms: chatRooms });
});

chatRouters.get("/allrooms", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const rooms = await Room.find({
    roomId: {
      $regex: filter,
    },
  });
  res.json({
    room: rooms.map((room) => ({
      roomId: room.roomId,
    })),
  });
});

chatRouters.post("/addroom", authMiddleware, async (req,res)=>{
    
})
