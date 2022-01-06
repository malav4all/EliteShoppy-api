const jwt = require('jsonwebtoken');
const tokenOperations = {
    createToken(id){
        let tokenId = jwt.sign({id},process.env.JWT_SCRT,{expiresIn:'1h'});
        return tokenId;
    },
}
module.exports = tokenOperations;
