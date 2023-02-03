const mysql = require("mysql2");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"simplifyHRM"
    // host: process.env.databaseHost,
    // user: process.env.databaseUsername,
    // password: process.env.databasePassword,
    // database: process.env.sql7595393
})

conn.connect((error)=>{
    try {
        console.log(`Connection with the database successful`);
    } catch (error) {
        console.error(error);
        return -1;
    }
})

module.exports = conn;