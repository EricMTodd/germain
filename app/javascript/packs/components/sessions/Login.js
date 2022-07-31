import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({
  domain,
  login
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${domain}/api/sessions`, {
      email: email,
      password: password
    })
    .then(response => {
      if (response.data.logged_in) {
        login(response.data)
      }
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor='login-email-input'>
          <strong>Email</strong>
          <br />
        </label>
        <input id='login-email-input' type='email' name='email' value={email} autoComplete='off' onChange={e => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor='login-password-input'>
          <strong>Password</strong>
        </label>
        <br />
        <input id='login-password-input' type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login