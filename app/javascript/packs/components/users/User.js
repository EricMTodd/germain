import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const User = ({
  domain
}) => {
  const [user, setUser] = useState({})

  const params = useParams()

  useEffect(() => {
    axios.get(`${domain}/api/users/${params.id}`)
    .then(response => {
      setUser(response.data.user)
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id='user'>
      <h1>{user.handle}</h1>
    </div>
  )
}

export default User