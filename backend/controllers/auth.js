const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../connMysql2.js");

const login = async (req, res) => {
  const {username,password} = req.body;
  const query = `SELECT *
                FROM users
                WHERE email = '${username}'`;

  conn.query(query, async (error, result) => {
    try { 
      if (result.length == 0) {
        return res.status(403).json({ message: "Username o password errati", data: "", check: false });
      }
      const pwHashed = result[0].password;
      if(await bcrypt.compare(password, pwHashed)){
        const token = jwt.sign({
          id: result[0].id_user,
          username: result[0].email,
        },process.env.jwtSecret);
        return res.status(200).json({message: "Login effettuato correttamente.", data: token, check: true});
      }
      return res.status(401).json({message: "Username o password errati", data: "", check: false});
    } catch (error) {
      return res.status(400).json({ message: error.message, data: "", check: false });
    }
  });
};

module.exports = {login};