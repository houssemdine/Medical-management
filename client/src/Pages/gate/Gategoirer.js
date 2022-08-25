import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';



const  Gategoirer=(props) =>{

const data=props.location.state;
console.log(data);

const [Medcin, setMedcin] = useState([]);
    useEffect(() => {
        getmed();
      }, );
    const getmed = async () => {
        Axios.get(`http://localhost:5000/allmed/${data}`).then((response) => {
            setMedcin(response.data);
        });
      };

  return (
    <div className="container">
    <div className="py-4">
      <h1>Les Medcins</h1>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Telephone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Medcin.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.tel}</td>
              <td>
                <Link class="btn btn-primary mr-2" to='/calender'>
                Prenez  un rendez-vous
                </Link>
               
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Gategoirer