import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AdminUserDetails = ({
  domain,
  user
}) => {
  const [admin, setAdmin] = useState(user.admin)
  const [artist, setArtist] = useState(user.artist)

  const handleCheck = e => {
    if (e.target.name === 'admin') {
      setAdmin(e.target.checked)
    }
    if (e.target.name === 'artist') {
      setArtist(e.target.checked)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.patch(`${domain}/api/users/${user.id}`, {
      user: {
        admin: admin,
        artist: artist
      }
    })
    .catch(error => console.log(error))
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <Link to={`/users/${user.id}`}>{user.handle} | </Link>
        <label htmlFor='admin-status-checkbox'>
          <strong> Admin: </strong>
        </label>
        <input type='checkbox' id='admin-status-checkbox' name='admin' onChange={handleCheck} defaultChecked={admin} />
        <label htmlFor='artist-status-checkbox'>
          <strong> Artist: </strong>
        </label>
        <input type='checkbox' id='artist-status-checkbox' name='artist' onChange={handleCheck} defaultChecked={artist} />
        <button type='submit'>Update Status</button>
      </form>
      <br />
    </div>
  )
}

export default AdminUserDetails