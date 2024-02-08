
const jwt = require("jsonwebtoken")

const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({message:"login or signup"});
    }
    try{
        jwt.verify(authHeader,"SECRET_KEY",(err,decoded)=>{
            if(err){
                res.json({message:"error verifying"})
            }
            else{
                
                req.userId = decoded.userId;
                next();
            }
        });
        
    }
    catch(err){
        return res.status(403).json({message:"authentication failed"});
    }
}
module.exports={authMiddleware}