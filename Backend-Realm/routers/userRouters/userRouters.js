import express from "express";
import { User } from "../../DataBase/db";
const UserRouters = express.Router();
import { z } from "zod";
const jwt = require("jsonwebtoken");
import { SECRET_KEY } from "../../config";

//Sign Up

const userSchema = z.object({
  Name: z.string(),
  UserName: z.string(),
  College: z.string(),
  Branch: z.string(),
  GraduationYear: z.number(),
  SID: z.string(),
  Email: z.string().email(),
  Password:z.string(),
});
UserRouters.post("/signup", async (req, res) => {
  const reqUser = {
    Name: req.body.Name,
    UserName: req.body.UserName,
    College: req.body.College,
    Branch: req.body.Branch,
    GraduationYear: req.body.GraduationYear,
    SID: req.body.SID,
    Email: req.body.Email,
    Password: req.body.Password,
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

//Sign In

const signInSchema = z.object({
    UserName:z.string(),
    Password:z.string(),

})

UserRouters.post("/signin", async(req,res)=>{
    const reqUser = {
        Username:req.body.UserName,
        Password:req.body.Password,
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

module.exports = UserRouters;
