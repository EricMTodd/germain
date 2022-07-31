import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const domain = 'http://localhost:3000'
  const navigate = useNavigate()

  const login = (data) => {
    setLoggedIn(data.logged_in)
    setCurrentUser(data.user)
    navigate('/')
  }

  const logout = () => {
    axios.delete(`${domain}/api/sessions`)
    .then(response => {
      setLoggedIn(response.data.logged_in)
      setCurrentUser(response.data.user)
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axios.get(`${domain}/api/sessions`)
    .then(response => {
      login(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='app'>
      <Nav loggedIn={loggedIn} logout={logout} currentUser={currentUser} />
      <Main domain={domain} login={login} loggedIn={loggedIn} currentUser={currentUser} />
      <Footer />
    </div>
  )
}

export default App