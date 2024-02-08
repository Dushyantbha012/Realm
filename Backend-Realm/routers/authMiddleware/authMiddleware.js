
const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if(!authHeader){
        return res.status(403).json({message:"login or signup"});
    }
    try{
        const decoded = jwt.verify(authHeader,"SECRET_KEY");
        if(decoded)
        {   console.log("userid is",decoded.userId)
            req.userId = decoded.userId;
            next();
        }
        else{
            res.json("not able to verify")
        }
    }
    catch(err){
        return res.status(403).json({message:"authentication failed"});
    }
}
module.exports={authMiddleware}