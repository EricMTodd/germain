import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({
  loggedIn,
  logout,
  currentUser
}) => {

  if (loggedIn) {
    return(
      <nav>
        <div id='navigation-controls'>
          <Link to='/' id='home-link'>Home</Link>
        </div>
        <div id='sessions-controls'>
          <Link to={`users/${currentUser.id}`}>{`${currentUser.handle}`}</Link>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
    )
  }

  return(
    <nav>
      <div id='navigation-controls'>
        <Link to='/' id='home-link'>Home</Link> 
      </div>
      <div id='sessions-controls'>
        <Link to='/login' id='login-link'>Login</Link>
        <Link to='/signup' id='sign-up-link'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav