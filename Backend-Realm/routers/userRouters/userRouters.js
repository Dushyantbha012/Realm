import express from "express";
import { User } from "../../DataBase/db";
const UserRouters = express.Router();
import { z } from "zod";
const jwt = require("jsonwebtoken");
import { SECRET_KEY } from "../../config";

const userSchema = z.object({
  Name: z.string(),
  UserName: z.string(),
  College: z.string(),
  Branch: z.string(),
  GraduationYear: z.number(),
  SID: z.string(),
  Email: z.string().email(),
});
UserRouters.post("/signup", async (req, res) => {
  const reqUser = {
    Name: req.Name,
    UserName: req.UserName,
    College: req.College,
    Branch: req.Branch,
    GraduationYear: req.GraduationYear,
    SID: req.SID,
    Email: req.Email,
  };
  try {
    const { success } = userSchema.safeParse(reqUser);
    if (!success) {
      return res.status(403).json({ message: "invalid input" });
    }
  } catch {
    return res.status(403).json({ message: "Error while verifying data" });
  }
  const existingUser = await User.findOne({
    $or: [
      { UserName: reqUser.UserName },
      { Email: reqUser.Email },
      { $and: [{ college: college }, { rollNo: rollNo }] },
    ],
  });
  if(existingUser){
    return res.status(410).json({message:"UserName, EMail, SID&College already Taken"});
  }
  const user = User.create(reqUser);
  const userId=user._id;
  const token = jwt.sign({userId:userId},SECRET_KEY)
  res.json({
    message:"User Created Successfully !!!!",
    token:token
  })
});

module.exports = UserRouters;
