const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: process.env.databaseHost,
    user: process.env.databaseUsername,
    password: process.env.databasePassword,
    database: process.env.databaseName
});

conn.connect((error)=>{
    if(error){
        console.error(error);
        return -1;
    }
    console.log(`Connection with the database successful`);
});

module.exports = {conn};