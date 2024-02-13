const express = require("express");
const { User } = require("../../DataBase/db");
const userRouters = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
const { authMiddleware } = require("../authMiddleware/authMiddleware");

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
    console.log("request reached",req.body);
    const { success } = userSchema.safeParse(reqUser);
    if (!success) {
            return res.status(403).json({ message: "invalid input" });
    }
  } catch {
        return res.status(403).json({ message: "Error while verifying data" });
  }
  const existingUser = await User.findOne({
    $or: [
      { userName: reqUser.username },
      { email: reqUser.email },
      { $and: [{ college: reqUser.college }, { SID: reqUser.SID }] },
    ],
  });
  console.log("existing user is",existingUser)
  if(existingUser){
    return res.status(410).json({message:"UserName, EMail, SID&College already Taken"});
  }
  const user = await User.create(reqUser);
  const token = jwt.sign({userId:user._id},SECRET_KEY);
  res.json({
    message:"User Created Successfully !!!!",
    token:token,
    userId:user._id
  })
});

//Sign In

const signInSchema = z.object({
    username:z.string(),
    password:z.string(),

})

userRouters.post("/signin", async(req,res)=>{
    const reqUser = {
        username:req.body.username,
        password:req.body.password,
    }
    const {success}= signInSchema.safeParse(reqUser)
    if(!success){
        return res.status(411).json({message:"Invalid Input"});
    }
    const user = await User.findOne(reqUser);
    if(!user){
        return res.status(404).json({message:"Sign Up|| User doesn't exist"});
    }

    const token = jwt.sign({userId:user._id},SECRET_KEY);
    res.json({message:"Signed In Successfully !!!!", token:token,userId:user._id});
    return;
})

userRouters.get("/profile",authMiddleware,async (req,res)=>{
  try{
    console.log("request reacher for profile")
  const userId = req.userId;
  console.log("in profile user id is", userId)
  console.log("user id in profile is ", userId)
  const user = await User.findOne({_id:userId});
  const profile = {
    username : user.username,
    email : user.email,
    college: user.college,
    graduationYear : user.graduationYear,
    name : user.name,
    branch : user.branch,
    SID : user.SID
  };
  console.log("profile is" , profile)
  res.json(profile);
  }
  catch{
    res.status(411).json({message:"Server Error"})
  }
})


module.exports = userRouters;
