import React from 'react'
import Sliderbar from '../../components/sliderbar/Sliderbar'
import './Med.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Patien from './Patien.js/Patien';
import Home from './Home';
import Rdv from './rdv/Rdv';
const Meddash = () => {
  return (
      <Router>
      <div className='home'>
   
  
      <Sliderbar/>
      <div className='home-cont'> 
     <Home/>
      <Switch>
      <Route  path="/global" component={Home}/>
      <Route  path="/patien" component={Patien}/>
      <Route  path="/rdv" component={Rdv}/>
      
      </Switch>
      
      </div>
      </div>
      </Router>
    
  )
}

export default Meddash