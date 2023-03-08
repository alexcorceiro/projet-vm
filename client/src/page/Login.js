import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "./css/Login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(email ==="admin@admin.com" && password === "admin"){
      navigate("/home")
      }
    };

    const handleReg = () => {
      navigate("/register")
    }

    const handleforgot = () => {
      navigate("/forgotpassword")
    }
  return (
    <div className="login-page">
      <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1 className='login-title'>Connexion</h1>
        <div className="form-group">
          <label className='login-subtitle' >Adresse email</label>
          <input className='login-input'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className='login-subtitle' >Mot de passe</label>
          <input className='login-input'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='login-btn'
         type="submit">Se connecter</button>
         <p>
            vous n'avez pas de compte : <i onClick={handleReg} className="login-form-p">ici crée</i>
         </p>
      </form>
      <div className='login-footer'>
        <p onClick={handleforgot}>mot de passe oublier</p>
      </div>
      </div>
    </div>
  )
}

export default Login
