const express = require("express");
const { User, Question, Answer } = require("../../DataBase/db");
const questionRouters = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config");
const { authMiddleware } = require("../authMiddleware/authMiddleware");

questionRouters.post("/addques", authMiddleware, async (req, res) => {
  const reqQues = {
    title: req.body.title,
    author: req.body.author,
  };
  const ques = {
    title: reqQues.title,
    author: reqQues.author,
    likes: 0,
    dislikes: 0,
  };

  try {
    const existingQues = await Question.findOne({ title: ques.title });
    if (existingQues) {
      return res.status(410).json({ message: "Question Already Asked!!!" });
    }
    const dbQues = await Question.create(ques);
    res.json({
      message: "Question Added",
      quesId: dbQues._id,
      title: dbQues.title,
    });
  } catch {
    res.status(411).json({ message: "Server Error" });
  }
});

questionRouters.get("/allques", authMiddleware, async (req, res) => {
  try {
    const filter = req.query.filter || "";
    const allQues = await Question.find({ title: { $regex: filter } });
    const ques = allQues.map((que) => ({
      title: que.title,
      author: que.author,
      likes: que.likes,
      dislikes: que.dislikes,
      quesId: que._id,
    }));
    res.json({ allQues: ques });
  } catch {
    res.json({ allQues: [] });
  }
});

questionRouters.post("/addanswer", authMiddleware, async (req, res) => {
 try {
    const content = req.body.content;
    const author = req.body.author;
    const quesId = req.body.quesId;
    const answer = {
      content: content,
      author: author,
      likes: 0,
      dislikes: 0,
    };
    const dbAnswer = await Answer.create(answer)
    const updatedQues = await Question.findByIdAndUpdate(
      quesId,
      {
        $push: { answers: dbAnswer._id },
      },
      { new: true }
    ).exec();
    res.status(200).json({message:"Answer Added"})
  } catch {
    res.status(410).json({message:"Error while Adding Answer"})
  }
});

questionRouters.post("/question",authMiddleware,async(req,res)=>{
    try{
        const quesId = req.body.quesId;
    const ques = await Question.findById(quesId);
    console.log("hehehehe my question is", ques.content);
    console.log(ques)
    const answerList = ques.answers;
    const n = answerList.length
    var answers =[];
    for( var i=0; i<n;i++){
      const ans = await Answer.findById(answerList[i]);
      const temp = {content:ans.content, author: ans.author, likes:ans.likes, dislikes:ans.dislikes, ansdbId:ans._id};
      answers.push(temp);
    }
    console.log("answers are ", answers)
    res.json({title:ques.title, author:ques.author, likes:ques.likes, dislikes:ques.dislikes, answers:answers})
    }
    catch{
       res.json({title:"",author:"",likes:0,dislikes:0,answers:[]})
    }
})

questionRouters.post("/likeques",authMiddleware,async(req,res)=>{
    //try{
        const quesId = req.body.quesId;

    await Question.findByIdAndUpdate(
        quesId,
        { $inc: { likes: 1 } }, 
        { new: true });
        return res.json({message:"Liked"})
   // }
    //catch{
        //res.status(410).json({message:"Error"})
    //}
})

questionRouters.post("/dislikeques",authMiddleware,async(req,res)=>{
    try{
        const quesId = req.body.quesId;

    await Question.findByIdAndUpdate(
        quesId,
        { $inc: { dislikes: 1 } }, 
        
        { new: true });
        return res.json({message:"Disliked"})
    }catch{
        res.status(410).json({message:"Error"})
    }
})
questionRouters.post("/likeanswer",authMiddleware,async(req,res)=>{
    try{
        const ansId = req.body.ansId;
    
    await Answer.findByIdAndUpdate(
        ansId,
        { $inc: { likes: 1 } }, 
        { new: true });
        return res.json({message:"Liked"})
    }catch{
        res.status(410).json({message:"Error"})
    }
})
questionRouters.post("/dislikeanswer",authMiddleware,async(req,res)=>{
    try{
        const ansId = req.body.ansId;
    
    await Answer.findByIdAndUpdate(
        ansId,
        { $inc: { dislikes: 1 } }, 
        { new: true });
        return res.json({message:"Disliked"})
    }catch{
        res.status(410).json({message:"Error"})
    }
})

module.exports =questionRouters