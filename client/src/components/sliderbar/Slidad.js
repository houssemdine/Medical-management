
   

import {
    LineStyle,
   
    PermIdentity,
    Storefront,
    AttachMoney,
 
  
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import './slidad.css'
  export default function Slidad() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/global" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              </Link>
             
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to="/patiena" className="link">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  Patient
                </li>
              </Link>
              <Link to="/rdv" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  RDV
                </li>
              </Link>
              <Link to="/admin/med" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Medecin
              </li>
              </Link>
              
            </ul>
          </div>
          
        </div>
      </div>
    );
  }