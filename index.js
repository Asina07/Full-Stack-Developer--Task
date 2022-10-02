const express = require("express");
var path = require('path');

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")

var app = express()
app.use(express.json());
const UserRouter = require('./routes/user');
const CarRouter = require('./routes/cars')
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
    origin : "http://localhost:3000",
    methods : ["POST"],
    credentials : true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      key: "userId",
      secret: "switch001",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );

//   
//controller test
//   login = (req,res)=>{
//     let sql = "select * from test"
  //db.query(sql,(err,data) =>{
//     if(err) throw err;
//     res.json(data)
//   })

  //}

//   //router
//  router.get('/',login)

 
//router
app.use('/',UserRouter)
app.use('/',CarRouter)

 //port listen
  app.listen(3001, () => {
    console.log("running server");
  });


  module.exports = app;