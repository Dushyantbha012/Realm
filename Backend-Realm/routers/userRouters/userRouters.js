import express from "express";
import { User } from "../../DataBase/db";
const userRouters = express.Router();
import { z } from "zod";
const jwt = require("jsonwebtoken");
import { SECRET_KEY } from "../../config";

//Sign Up

const userSchema = z.object({
  name: z.string(),
  username: z.string(),
  college: z.string(),
  branch: z.string(),
  graduationYear: z.number(),
  SID: z.string(),
  email: z.string().email(),
  password:z.string(),
});
userRouters.post("/signup", async (req, res) => {
  const reqUser = {
    name: req.body.name,
    username: req.body.username,
    college: req.body.college,
    branch: req.body.branch,
    graduationYear: req.body.graduationYear,
    SID: req.body.SID,
    email: req.body.email,
    password: req.body.password,
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
      { userName: reqUser.userName },
      { email: reqUser.email },
      { $and: [{ college: college }, { SID: SID }] },
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

//Sign In

const signInSchema = z.object({
    username:z.string(),
    password:z.string(),

})

userRouters.post("/signin", async(req,res)=>{
    const reqUser = {
        username:req.body.userName,
        password:req.body.password,
    }
    const {success}= signInSchema.safeParse(reqUser)
    if(!success){
        return res.status(411).json({message:"Invalid Input"});
    }
    const user = await User.findOne({reqUser});
    if(!user){
        return res.status(404).json({message:"Sign Up|| User doesn't exist"});
    }
    const token = jwt.sign({UserId:user._id},SECRET_KEY);
    res.json({message:"Signed In Successfully !!!!", token:token});
    return;
})

module.exports = userRouters;
