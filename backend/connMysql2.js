const mysql = require("mysql2");
const dotenv = require("dotenv");

// dotenv.config();
dotenv.config({path:"./etc/secrets/.env"});

const conn = mysql.createConnection({
    host: process.env.databaseHost,
    user: process.env.databaseUsername,
    password: process.env.databasePassword,
    database: process.env.databaseName,
});

conn.connect((error)=>{
    if(error){
        console.error(error.message);
        return -1;
    }
    console.log(`Connection with the database successful`);
});

module.exports = conn