import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";
const  Rdv=() =>{

    const [rdv, setrdv] = useState([]);
    useEffect(() => {
        getPatien();
      }, []);
    const getPatien = async () => {
        Axios.get("http://localhost:5000/rdv").then((response) => {
            setrdv(response.data);
        });
      };

    const deletePatien = async (id) => {
        Axios.delete(`http://localhost:5000/delpat/${id}`).then((response) => {
            setrdv(
                rdv.filter((val) => {
              return (val.id !== id);
            })
          );
        });
        getPatien();
      }; 



   

  return (
    <div className="container">
      <div className="py-4">
        <h1>Les RDV</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rdv.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.date}</td>
                
                
                <td>
                  <Link class="btn btn-primary mr-2" to={`/patie/${user.idmed}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePatien(user.idp)}
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

export default Rdv