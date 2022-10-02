
import React,{ useEffect, useState } from 'react';
import axios from 'axios'
import { Navigate} from 'react-router-dom'
import './auth.css';


function Authentication() {

  const [usernameReg, setUsernameReg] = useState('')
  const [userPasswordReg, setPasswordReg] = useState('')

  const [UserNameLogin, setUserNameLogin] = useState('')
  const [UserPasswordLogin, setUserPasswordLogin] = useState('')

  const[loginStatus,setLoginStatus] = useState("")
  

  const register = ()=>{
    axios.post('http://localhost:3001/registration',{
      username: usernameReg,
      password : userPasswordReg
    }).then((response)=>{
      console.log(response)
     
    })
  }

  const login = ()=>{
    axios.post('http://localhost:3001/login',{
      username: UserNameLogin,
      password : UserPasswordLogin
    }).then((response)=>{
       console.log(response)
      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        console.log("login successfull")
        setLoginStatus(response.data[0].username);
        <Navigate to='AddCars'/>
        
      }
     
    })
  }



  useEffect(()=>{
    register()
    login()
   
  
  },[])

  
  return (
    <div className="App">
      <div className ="registration">
        <h3 className='header'>Register</h3>
        <label>userName</label>
        <input type ="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
        <label>Password</label>
        <input type ="text"  onChange={(e)=>{setPasswordReg(e.target.value)}}/>
        <button className='btn' onClick={register}>Register</button>
      </div>
      <div className='login'>
        <h3 className='header'>Login</h3>
        <input type='text' placeholder='username..'  onChange={(e)=>{setUserNameLogin(e.target.value)}}/>
        <input type='password' placeholder='password..' onChange={(e)=>{setUserPasswordLogin(e.target.value)}}/>
        <button className='btn' onClick={login}>Login</button>
      </div>
      <h5 className='message'>{loginStatus}</h5>
    </div>
  );
}

export default Authentication;
