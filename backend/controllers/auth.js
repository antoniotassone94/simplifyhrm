const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const login = async (req,res) => {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        res.status(403);
        return res.json({message:"Username o password errati.",data:"",check:false});
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({
            id:user._id,
            username:user.username
        },process.env.jwtSecret)
        return res.json({message:"Login effettuato correttamente.",data:token,check:true})
    }
    res.status(401);
    res.json({message:"Username o password errati.",data:"",check:false});
}

module.exports = {login};