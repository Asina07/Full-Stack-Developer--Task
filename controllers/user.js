const bcrypt = require('bcrypt');
const saltRound = 10
let db = require('../db/db_config')

//Registration  Controllers
exports.registerUser = (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password,saltRound,(err,hash)=>{
        if(err){
            console.log(err)
        }
        db.query("insert into users(username,password) values (?,?)",[username,hash],(err,result)=>{
            //console.log(err)
            if(err) throw err;
            res.json({
                message : "data inserted"
            })
        })
    })
    }

    //login
    exports.loginUser = (req,res)=>{
        const username = req.body.username
        const password = req.body.password
    
        db.query("SELECT * FROM users where username = ? ",username,(err,result)=>{
            
            if (err){
                res.send({err:err});
            }
    
    
            if(result.length > 0){
                bcrypt.compare(password,result[0].password,(error,response)=>{
                    if(response){
                        req.session.user = result;
                         console.log(req.session.user);
                        res.send(result)
                    }else{
                        res.send({message:"Invalid Password"})
                    }
                })
            }else{
                res.send({message :"User Doesnt Exist"})
            }
        })
    
    }