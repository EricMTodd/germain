import React from 'react'
import { Link } from 'react-router-dom'

const AdminUserDetails = ({
  user
}) => {

  if (user.admin && user.artist) {
    return(
      <div>
        <Link to={`/users/${user.id}`}>{user.handle} | </Link>
        <label htmlFor='admin-status-checkbox'>
          <strong> Admin: </strong>
        </label>
        <input type='checkbox' id='admin-status-checkbox' checked />
        <label htmlFor='artist-status-checkbox'>
          <strong> Artist: </strong>
        </label>
        <input type='checkbox' id='artist-status-checkbox' checked />
      </div>
    )
  }

  if (user.admin) {
    return(
      <div>
        <Link to={`/users/${user.id}`}>{user.handle} | </Link>
        <label htmlFor='admin-status-checkbox'>
          <strong> Admin: </strong>
        </label>
        <input type='checkbox' id='admin-status-checkbox' checked />
        <label htmlFor='artist-status-checkbox'>
          <strong> Artist: </strong>
        </label>
        <input type='checkbox' id='artist-status-checkbox' />
      </div>
    )
  }

  if (user.artist) {
    return(
      <div>
        <Link to={`/users/${user.id}`}>{user.handle} | </Link>
        <label htmlFor='admin-status-checkbox'>
          <strong> Admin: </strong>
        </label>
        <input type='checkbox' id='admin-status-checkbox' />
        <label htmlFor='artist-status-checkbox'>
          <strong> Artist: </strong>
        </label>
        <input type='checkbox' id='artist-status-checkbox' checked />
      </div>
    )
  }

  return(
    <div>
      <Link to={`/users/${user.id}`}>{user.handle} | </Link>
      <label htmlFor='admin-status-checkbox'>
        <strong> Admin: </strong>
      </label>
      <input type='checkbox' id='admin-status-checkbox' />
      <label htmlFor='artist-status-checkbox'>
        <strong> Artist: </strong>
      </label>
      <input type='checkbox' id='artist-status-checkbox' />
    </div>
  )
}

export default AdminUserDetails