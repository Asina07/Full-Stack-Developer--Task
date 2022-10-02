import React, { useState,useEffect } from 'react'
import './Addcars.css'
import axios from 'axios';


function AddCars() {

  const [make,setmake]= useState("")
  const [model,setmodel]= useState("")
  const [year,setyear]= useState('')
  const [sales,setsales]= useState("")
  const [price,setprice]= useState('')
  
  const[Addcar,setAddCar] = useState([])

  const Addcars=()=>{
    //console.log(make,model,year)
    axios.post('http://localhost:3001/create',{
      Make:  make,
      Model : model,
      Year : year,
      Sales : sales,
      Type : price,
    }).then(()=>{
      //console.log("inserted",response)
      // setAddCar(response.data)
      setAddCar([
        ...Addcar,
        {
          Make:  make,
          Model : model,
          Year : year,
          Sales : sales,
          Type : price,
        }
      ])
    })
  }

  useEffect(()=>{
    Addcars()
  },[])

  return (
    <div className='App'>
      <div className='information'>
        <h3 className='header'> CAR LISTING FORM</h3>
        <label>MAKE</label>
        <input type="text"  onChange={(e)=>{setmake(e.target.value)}}/>
        <label>MODEL</label>
        <input type="text" onChange={(e)=>{setmodel(e.target.value)}}/>
        <label>year</label>
        <input type="number" onChange={(e)=>{setyear(e.target.value)}}/>
        <label className='type'>SALES BY AUCTION
          <input className='box' type="text" onChange={(e)=>{setsales(e.target.value)}}/>
          {/* <input className='box' type="text" onChange={(e)=>{setsales(e.target.value)}}/> */}
        </label>
        <label>RESERVE/SALES PRICE</label>
        <input type="text" onChange={(e)=>{setprice(e.target.value)}}/>

        <button onClick={Addcars}>LIST CARS</button>
      </div>
      
  </div>
  )
}

export default AddCars;