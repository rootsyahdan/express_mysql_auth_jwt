const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    database: "express_mysql"
}).catch(()=>{
    console.log('database not connected');
})

module.exports = connection;