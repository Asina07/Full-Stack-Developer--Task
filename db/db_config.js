const mysql = require("mysql");

var db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "logintask"
  });

  db.connect((err)=>{
    if(err){
        console.log('login db not connected',err)
    }else{
        console.log('login db connected')
    }
  })


  module.exports = db;