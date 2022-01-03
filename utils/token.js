const jwt = require('jsonwebtoken');
const tokenOperations = {
    secret:'thisisthesecretkey', // maintain env file
    createToken(id){
        let tokenId = jwt.sign({"userid":'id'},this.secret,{expiresIn:'1h'});
        console.log('Token is ',tokenId);
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