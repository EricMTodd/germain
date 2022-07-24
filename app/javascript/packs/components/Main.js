import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './static/Home'
import { NewUserForm } from './users/UserForms'
import Login from './sessions/Login'

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
      </Routes>
    </main>
  )
}

export default Main