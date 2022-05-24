import './index.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { AuthContext } from '../../context/AuthContext';



function LoginPage() {
   
  const[error, setError] = useState(false);
  const[email, setEmail] = useState("");
  const[password, setPassoword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };


  return (
  
    <div className="login">
      <h1 className="title">Entrar</h1>
      <form className="form" onSubmit={handleLogin}>
        <div className="field" placeholder="email">
          <input
            type="email"
            placeholder="email"
          onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="senha"
           onChange={e=>setPassoword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button>Entrar</button>
        </div>
       {error &&<span>erro no email ou na senha</span>}
      </form>
    </div>

  );
}

export default LoginPage;
