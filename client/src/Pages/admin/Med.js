import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";
const  Med=() =>{

    const [med, setmed] = useState([]);
    useEffect(() => {
        getPatien();
      }, []);
    const getPatien = async () => {
        Axios.get("http://localhost:5000/med").then((response) => {
            setmed(response.data);
        });
      };

    const deletePatien = async (id) => {
        Axios.delete(`http://localhost:5000/delpat/${id}`).then((response) => {
            setmed(
                med.filter((val) => {
              return (val.id !== id);
            })
          );
        });
        getPatien();
      }; 



   

  return (
    <div className="container">
      <div className="py-4">
        <h1>Les medecins</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {med.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/patie/${user.idmed}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.idmed}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePatien(user.idmed)}
                  >
                    Delete
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

export default Med