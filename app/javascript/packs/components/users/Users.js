import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AdminUserDetails from './AdminUserDetails'

const Users = ({
  domain
}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${domain}/api/users`)
    .then(response => {
      console.log(response.data)
      setUsers(response.data.users)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='uesrs'>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}><AdminUserDetails user={user} /></li>)}
      </ul>
    </div>
  )
}

export default Users