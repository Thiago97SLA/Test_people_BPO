import React, { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { userapi } from "./Api/Users";
import "./Pages.css";



export const Post = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  },[])

 const getUser  = async ()=> {
 const resp = await userapi.get('https://jsonplaceholder.typicode.com/users/1/posts');
 setUsers(resp.data);
 }

  return (
    <div className= ".ms-10 padding-table">
      <h2>Usuarios</h2>
      <hr />
      <table className="table table-dark">
          <thead>
            <tr>
              <th  className="tr-table">ID</th>
              <th  className="tr-table">Title</th>
              <th  className="tr-table">Body</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map( user => (
                <tr key ={user.id}>
                <td className="tr-table">{user.id}</td>
                <td className="tr-table">{user.title}</td>
                <td className="tr-table">{user.body}</td>
                </tr>
              ))
            }
           
            </tbody>
        </table>
    </div>
  );
};
