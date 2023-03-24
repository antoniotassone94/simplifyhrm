const jwt = require("jsonwebtoken");

function authenticateToken(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null){
        res.status(401);
        return res.json({message:"Utente non autorizzato a procedere.",check:false});
    }
    jwt.verify(token,process.env.jwtSecret,(error,user) => {
        if(error){
            res.status(403);
            return res.json({message:"Utente non autorizzato a procedere.",check:false});
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;