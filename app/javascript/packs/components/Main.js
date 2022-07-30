import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './static/Home'
import { NewUserForm } from './users/UserForms'
import Login from './sessions/Login'
import User from './users/User'
import Users from './users/Users'

const Main = ({
  domain,
  login
}) => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<NewUserForm domain={domain} login={login} />} />
        <Route path='/login' element={<Login domain={domain} login={login} />} />
        <Route path='/users/:id' element={<User domain={domain} />} />
        <Route path='/users' element={<Users domain={domain} />} />
      </Routes>
    </main>
  )
}

export default Main