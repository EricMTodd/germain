import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './static/Home'
import { NewUserForm } from './users/UserForms'

const Main = ({
  domain
}) => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<NewUserForm domain={domain} />} />
      </Routes>
    </main>
  )
}

export default Main