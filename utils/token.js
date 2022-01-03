const jwt = require('jsonwebtoken');
const tokenOperations = {
    createToken(id){
        let tokenId = jwt.sign({id},process.env.JWT_SCRT,{expiresIn:'1h'});
        return tokenId;
    },
    verifyToken(tokenId){
        let decode = jwt.verify(tokenId, this.secret);
        if(decode && decode.userid){
                return true;
        }
        return false;
    }
}
module.exports = tokenOperations;