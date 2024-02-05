import { SECRET_KEY } from "../../config";
const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({message:"login or signup"});
    }
    try{
        const decoded = jwt.verify(authHeader,SECRET_KEY);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        return res.status(403).json({message:"authentication failed"});
    }
}
module.exports={authMiddleware}