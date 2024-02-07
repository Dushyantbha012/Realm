const { SECRET_KEY } =require( "../../config");
const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    console.log(authHeader)
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