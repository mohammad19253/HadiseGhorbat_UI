
const jwt = require('jsonwebtoken');
const authentication = ( req, res , next)=>{
    const token = req.headers.authorization.replace("Bearer ", "");
    if(token === null) res.sendStatus(401)
    jwt.verify(token,process.env.OTP_SECRET_KEY, function(err, phonenumber) {
        if(err) return res.sendStatus(403)
        req.phonenumber = phonenumber
        next()
        //no access
      });
}

module.exports = authentication
