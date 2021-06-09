import React, {useState} from "react";
import "./Pages.css";
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import  {useFirebaseApp, useUser} from 'reactfire';




export const User = () => {
 
  const [email,  setemial ] = useState('');
  const [password, setpassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();

  const login = async ()=>{
    await firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>alert('Seccion inicializada')).catch(err=>console.log(err))
  }

  const logout = async ()=>{
    await firebase.auth().signOut();
  }


  return (
    <div>
      <h1> 
        Login 
      </h1>
        {
          user &&
          <div>
            <div className="margin-div-topinputs">
              <div className="input-group mb-3 padding-fomr">
                <input type="email" className="form-control" placeholder="Username" aria-describedby="basic-addon1" id="username"  onChange={(ev) => setemial(ev.target.value)} />
              </div>
              <div className="input-group mb-3 padding-fomr">
                <input type="password" className="form-control" placeholder="Password"  aria-describedby="basic-addon1" id='password' onChange={(ev) => setpassword(ev.target.value)} />
              </div>
            </div>
         <div>
          <botton onClick={login} className="btn btn-primary btn-style" >Login</botton>
        <Link to= "registro">
          <botton className="btn btn-secondary btn-style">Registro</botton>
        </Link>
      </div>
    </div>
    }
    {
      !user && 
      <div>
        <h2>Resgistrado Y logueado</h2>
          <div>
            <Link to='/'>
              <botton className="btn btn-danger btn-style" onClick={logout} >Cerrar sesion</botton>
            </Link>
          </div>
        </div>
      }   
    </div>
  );
};
