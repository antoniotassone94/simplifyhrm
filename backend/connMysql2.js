const mysql = require("mysql2");

const conn = mysql.createConnection({
    host:"sql7.freesqldatabase.com",
    user:"sql7595393",
    password:"Z7JHd2BAa8",
    database:"sql7595393"
});

conn.connect((error)=>{
    if(error){
        console.error(error);
        return -1;
    }
    console.log(`Connection with the database successful`);
});

module.exports = conn;