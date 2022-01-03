const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token;
    if(authHeader){
        jwt.verify(token,process.env.JWT_SCRT,(err,user)=>{
            if(err) res.status(403).json("Token is Not Valid...")
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated...")
    }
}
module.exports = {verifyToken}