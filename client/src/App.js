
import Home from "./Pages/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom"








import Navbar from "./Navbar";
import Sigin from "./Scr/Sigin";
import SignUp from "./Scr/SignUp";
import Products from "./components/Products";
import Meddash from "./Pages/Medecin/Meddash";
import Gategoirer from "./Pages/gate/Gategoirer";
import Patien from "./Pages/Patien/Patien";
import Admin from "./Pages/admin/Admin";




function App() {
  return (
   
    
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    
    <Route  path="/sign-e" component={Sigin}/>
    
    <Route  path="/sign-up" component={SignUp}/>
    
    <Route  path="/type" component={Products}/>
    <Route  path="/Medecin" component={Meddash}/>
    <Route path="/gat" component={Gategoirer}/>
    <Route path="/calender" component={Patien}/>
    <Route path="/admin" component={Admin}/>
  

   
    
    


    
   

    

    
    </Switch>

    </Router>
  
  
  );
      
      
    
  
};

export default App;
