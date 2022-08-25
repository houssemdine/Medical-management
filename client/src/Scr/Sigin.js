
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Axios from 'axios';
export default function Sigin(props) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const redirect = 
  '/Medecin';
 
const login=()=>{
 Axios.post('http://localhost:5000/login',{
    email:email,
    password:password
  }).then((response)=>{
    console.log("ohhhhhh22222");  
    if(response.data==='m'){
      props.history.push(redirect);
    }else if(response.data==='a'){props.history.push('/admin');}
    
   else {props.history.push('/type');}
    
      

  });

  //props.history.push(redirect);
}
 
  

    return (
       <div >
        <div className="co">
        <div className="cont">
        <div className="form sign-in">
     
          <h2>Se Connecter </h2>
          <label>
            <span>
    Adresse e-mail</span>
            <input  name="email" onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            <span>
    Mot de passe</span>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button className="bb" onClick={login}>Se Connecter</button>

          <Link to="sign-up"><p>Creé un compte</p></Link>
    
          
        </div>
        
        
    
        <div className="sub-cont">
          
          </div>
       
          
        
      </div>
      </div>
      </div> 
    )
}
