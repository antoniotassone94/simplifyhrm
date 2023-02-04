const mysql = require("mysql2");

const conn = mysql.createConnection({
    host:process.env.dbHost,
    user:process.env.dbUser,
    password:process.env.dbPassword,
    database:process.env.dbName
});

conn.connect((error)=>{
    if(error){
        console.error(error);
        return -1;
    }
    console.log(`Connection with the database successful`);
});

module.exports = conn