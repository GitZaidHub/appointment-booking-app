const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "appointment_db"
});

connection.connect((err) => {
    if(err){
        console.log("DB Connection Failed");
        console.log(err);
        return;
    }

    console.log("Database Connected");
});

module.exports = connection;