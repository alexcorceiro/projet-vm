import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./css/Login.css"

const initialState = {
  email: "", 
  password: "", 
 
}

function Login() {
  const [formData, setFormdata] = useState(initialState)
  const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post("http://localhost:5400/api/login", formData)
    .then(response =>{
      console.log(response.data.message)

      navigate("/home")
    } )
    .catch( err =>{
      console.log(err)
    })
  }
  const handleChange = (e) => {
    setFormdata({...formData, [e.target.name] : e.target.value})
  }
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
          <input className='login-input' type="email"
          name='email' onChange={handleChange} value={formData.email}
          />
        </div>
        <div className="form-group">
          <label className='login-subtitle' >Mot de passe</label>
          <input className='login-input' type="password"
         name='password' onChange={handleChange} value={formData.password}
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
