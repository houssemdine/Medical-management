import React, {  useState } from 'react';

import './SignUp.css';

import Axios from 'axios';

export default function SignUp(props) {


  const [nom, setnom] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setmdp] = useState('');
  const [prenom, setprenom] = useState('');
  const [tel, settel] = useState('');
  const redirect = 
  '/type';

  const register =()=>{
    Axios.post('http://localhost:5000/register',{

    nom:nom,
    prenom:prenom,
    email:email,
    mdp:mdp,
    tel:tel
    
    }).then(()=>{
      console.log("ohhhhhh");
      props.history.push(redirect);
    });


  }


 

 





  return(<div >
	  <div className="co">
    <div className="cont">
    <div className="form sign-in">
      <h2>Inscription</h2>
      <label>
        <span>

  
      <label>
        <span>
Nom </span>
        <input type="text" name="nom" onChange={(e) => setnom(e.target.value)} />
      </label>

      <label>
      <span>
Prenom </span>
      <input type="text" name="prenom" onChange={(e) => setprenom(e.target.value)} />
    </label>


    Adresse e-mail</span>
    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
  </label>


  <label>
  <span>
Mot de passe</span>
  <input type="password" name="mdp" onChange={(e) => setmdp(e.target.value)} />
</label>

    <label>
    <span>
Telephone </span>
    <input type="text" name="tel" onChange={(e) => settel(e.target.value)} />
  </label>

    
      <button className="bb" onClick={register}>Inscription</button>
 

      
    </div>
	
	

    <div className="sub-cont">
      
      </div>
   
      
    
  </div>
  </div>
  </div>
  ) ;
}