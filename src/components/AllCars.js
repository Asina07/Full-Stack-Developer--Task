import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Allcars.css'

function AllCars() {

    const[getcars,setAllCars] = useState([])
    const[update,Setupdate] = useState('')


const updatecars  = ()=>{
  axios.put('http://localhost:3001/update',
  {
  // Model : model,
  // Year : year,
 }).then((response)=>{
    //alert('update')
    Setupdate(update.map((item)=>{
      return {Model:item.Model,Make:item.Make,Year:item.Year,Sales:item.Sales,Type:item.Type}
    }))
  })
}
    
  

  useEffect(()=>{
    axios.get('http://localhost:3001/cars').then((response)=>{
      //console.log("Got it!",response)
      setAllCars(response.data)
     
    })
  },[])
    
    console.log("dataget",getcars)
    const getall= getcars.map((item)=>{
      return(
        <div className='listcars'>
          
          <h5>{item.Make}</h5>
          <h5>{item.Model}</h5>
          <h5>{item.Year}</h5>
          <h5>{item.Sales}</h5>
          <h5>{item.Type}</h5>
          <div className='update'>
          <input className='input' type='text' onChange={(e)=>{Setupdate(e.target.value)}} />
          <input className='input' type='text'onChange={(e)=>{Setupdate(e.target.value)}}/>
         
          <button className='btn' onClick={updatecars}>Update</button>
        </div>
        </div>
       
      
    )
  })


  return (
    <div>
      <h1>{getall}</h1>
     
    </div>
    
   
  )
  }

export default AllCars;