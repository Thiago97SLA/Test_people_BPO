import React, {useState} from "react";
import "./Pages.css";
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import  {useFirebaseApp, useUser} from 'reactfire';

export const Registro = () => {

  
  const [email,  setemial ] = useState('');
  const [password, setpassword] = useState('');

  const firebase = useFirebaseApp();
  const user = useUser();

  const submit = async ()=>{
    await firebase.auth().createUserWithEmailAndPassword(email, password).then((res)=>alert('Usuarios registrado')).catch(err=>console.log(err)).then((res)=> firebase.auth().sendSignInLinkToEmail)
  }
  
  const logout = async ()=>{
    await firebase.auth().signOut();
  }
    return (
     <div>
       {
       user &&  
       <div>
        <h1>
        Registro
        </h1>
          <div>
          <div className="margin-div-topinputs">
          <div className="input-group mb-3 padding-fomr">
              <input type="email" class="form-control" placeholder="Username" aria-describedby="basic-addon1" id="username"  onChange={(ev) => setemial(ev.target.value)} />
          </div>
          <div className="input-group mb-3 padding-fomr">
              <input type="password" className="form-control" placeholder="Password"  aria-describedby="basic-addon1" id='password' onChange={(ev) => setpassword(ev.target.value)} />
          </div>
        </div>
      <div>
        <botton onClick={submit} className="btn btn-primary btn-style" >Registro</botton>
      <Link to= "/">
      <botton className="btn btn-danger btn-style">Volver</botton>
      </Link>
      </div>
      </div>
       
      </div>}
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
  