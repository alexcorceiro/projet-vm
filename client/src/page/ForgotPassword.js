import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import "./css/forgotPassword.css"

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      // Appeler une fonction pour envoyer les informations de connexion au serveur
      navigate("/home")
    };

  return (
    <div className="forgotP-page">
      <div className='forgotP-container'>
      <form className='forgotP-form' onSubmit={handleSubmit}>
        <h1 className='forgotP-title'>mot de passe oublier</h1>
        <div className="form-group">
          <label className='forgotP-subtitle' >Adresse email</label>
          <input className='forgotP-input'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className='forgotP-btn'
         type="submit">Se connecter</button>
        </form>
     </div>
    </div>
  )
}

export default ForgotPassword
