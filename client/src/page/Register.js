import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import "./css/Register.css"



function Register() {
  const initialState = {
    nom: '',
    prenom: '',
    email: '',
    password: ''
  };
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate()

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5400/api/register', formData)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
      navigate("/home")
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleLogi = () => {
        navigate('/')
    }
  return (
    <div className="register-page">
      <div className='register-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        <h1 className='register-title'>Crée un compte</h1>
        <div className="form-group">
          <label className='register-subtitle' >Prenom</label>
          <input className='register-input'
            type="text"
            id="prenom"
            name='prenom'
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='register-subtitle' >Nom</label>
          <input className='register-input'
            type="text" id="nom" name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='register-subtitle' >Adresse email</label>
          <input className='register-input'
            type="email" name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className='register-subtitle' >Mot de passe</label>
          <input className='register-input'
            type="password" name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='register-btn'
         type="submit">enregister</button>
         <p>
            vous avez un compte : <i onClick={handleLogi} style={{cursor: 'pointer'}}>ici se connecter</i>
         </p>
      </form>
      </div>
    </div>
  )
}

export default Register
