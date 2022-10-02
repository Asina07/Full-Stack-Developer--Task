import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './AuctionList.css'
function AuctionListCars() {
  const[getcars,setAllCars] = useState([])
  const[selectedAucCars, SetselectedAucCars] = useState([])

//checkbox count
var checkboxes = document.querySelectorAll('.checkbox')
var count = 0;
  for(var i=0; i < checkboxes.length ; i++)  {
   checkboxes[i].addEventListener('click',function(){
    if(this.checked === true){
      count++;
      SetselectedAucCars(this.value)
    }else{
      count--
    }
    document.getElementById('selected').innerHTML =count
   })
  }
  console.log("selevtedaucc",selectedAucCars)

  const auctionCick=()=>{
    
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
        <div className='list'>
           
          <div className='listcars'>
            <input type="checkbox" className='checkbox'/>
              <h5>{item.Make}</h5>
              <h5>{item.Model}</h5>
              <h5>{item.Year}</h5>
              <h5>{item.Sales}</h5>
              <h5>{item.Type}</h5>
          </div> 
        </div> 
    )
  })

  return (
    <div>
      <h1>{getall}</h1>
      <div className='counter'>
      <span className='add'>Cars Added:</span>
      <span className='count' id='selected'> 0</span>
      </div>
     <button className='btn' onClick={auctionCick}>Confirm Auction Lising</button>
         
    </div>
    
   
  )
  }

export default AuctionListCars;