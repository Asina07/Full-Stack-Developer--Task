let db = require('../db/db_config')


//Post/Add Cars
exports.AddCars = (req,res)=>{
    const Make = req.body.Make;
    const Model = req.body.Model;
    const Year = req.body.Year;
    const Sales = req.body.Sales;
    const Type = req.body.Type;

    db.query("INSERT INTO cars (Make,Model,Year,Sales,Type) VALUES (?,?,?,?,?)", [Make,Model,Year,Sales,Type],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("values Inserted")
        }
    }
    )
    
  }


  //Get List of cars
 exports.Allcars = (req,res)=>{
    db.query("SELECT * FROM cars",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
 }


 //update
 exports.UpdateCars = (req,res)=>{
    const Make = req.body.Make;
    const Model = req.body.Model;
    const Year = req.body.Year;
    const Sales = req.body.Sales;
    const Type = req.body.Type;

    db.query("UPDATE SET cars (Make,Model,Year,Sales,Type) VALUES (?,?,?,?,?)", [Make,Model,Year,Sales,Type],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("values Inserted")
        }
    }
    )
    
 }