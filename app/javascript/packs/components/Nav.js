import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <nav>
      <div id='navigation-controls'>
        <Link to='/' id='home-link'>Home</Link> 
      </div>
      <div id='sessions-controls'>
        <Link to='/signup' id='sign-up-link'>Sign Up</Link>
      </div>
    </nav>
  )
}

export default Nav