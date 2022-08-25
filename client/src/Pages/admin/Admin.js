import React from 'react'
import Slidad from '../../components/sliderbar/Slidad'
import './amdin.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patiena from './Patiena';
import Med from './Med';



const Admin = () => {
  return (
      <Router>
      <div className='home'>
   
  
      <Slidad/>
      <div className='home-cont'> 
    
      <Switch>
      <Route  path="/patiena" component={Patiena}/>
      <Route  path="/admin/med" component={Med}/>
      
      </Switch>
      
      </div>
      </div>
      </Router>
    
  )
}

export default Admin