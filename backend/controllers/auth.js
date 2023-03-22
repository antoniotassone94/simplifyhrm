const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const conn = require("../connMysql2.js");

const registerCompanies = async (req, res)=>{
  const {name, fiscal_code, address, city, province, cap} = req.body;

  const query = `INSERT INTO companies(name, fiscal_code, address, city, province, cap)
                VALUES('${name}', '${fiscal_code}', '${address}', '${city}', '${province}', '${cap}')`;

  conn.query(query, (error, result)=>{
    if(error) return res.status(400).json({message: error.message, data: "", check: false});

    try {
      return res.status(200).json({message: "Registrazione effettuata correttamente", data:result, check: true})
    } catch (error) {
      return res.status(400).json({message: error.message, data: "", check: false});
    }
  })
}

const loginCompanies = (req, res)=>{
  const {fiscal_code} = req.body

  const query = `SELECT * FROM companies WHERE fiscal_code = '${fiscal_code}'`

  conn.query(query, (error, result)=>{
    if(error) return res.status(400).json({message: error.message, data: "", check: false});

    try {
      if(result.length == 0){
        return res.status(403).json({message: "Codice fiscale errato", data: "", check: false});
      }

      const token = jwt.sign({
        id: result[0].id_company,
        name: result[0].name,
      },process.env.jwtSecret);

      return res.status(200).json({message: "Login effettuato correttamente", data: token, check: true})
    } catch (error) {
      return res.status(400).json({ message: error.message, data: "", check: false });
    }
  })
}

// FIX Login User
const login = async (req, res) => {
  const {username,password} = req.body;
  const query = `SELECT * FROM users WHERE email = '${username}'`;
  conn.query(query,async (error2, result) => {
    if(error2){
      return res.status(400).json({ message: error2.message, data: "", check: false });
    }
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
    } catch (error3) {
      return res.status(400).json({ message: error3.message, data: "", check: false });
    }
  });
};

module.exports = {login, registerCompanies, loginCompanies};