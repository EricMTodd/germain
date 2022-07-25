import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewUserForm = ({
  domain,
  login
}) => {
  const [email, setEmail] = useState('')
  const [handle, setHandle] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${domain}/api/users`, {
      user: {
        email: email,
        handle: handle,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
    .then(response => {
      login(response.data)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  return(
    <div id='new-user-form' className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor='new-user-email-input'>
          <strong>Email</strong>
          <br />
        </label>
        <input id='new-user-email-input' type='email' name='email' value={email} autoComplete='off' onChange={e => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor='new-user-handle-input'>
          <strong>Handle</strong>
          <br />
        </label>
        <input id='new-user-handle-input' type='text' name='handle' value={handle} autoComplete='off' onChange={e => setHandle(e.target.value)} />
        <br />
        <br />
        <label htmlFor='new-user-password-input'>
          <strong>Password</strong>
          <br />
        </label>
        <input id='new-user-password-input' type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <br />
        <label htmlFor='new-user-password-confirmation-input'>
          <strong>Password Confirmation</strong>
          <br />
        </label>
        <input id='new-user-password-confirmation-input' type='password' name='passwordConfirmation' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
        <br />
        <br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export { NewUserForm }